const express = require('express');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
const db = require('./database');
const { QUESTIONS, calculateLevel, getClientQuestions, TEST_DURATION_SECONDS } = require('./questions');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// 1. Validate ID / Password
app.post('/api/test/validate-id', (req, res) => {
  const { code } = req.body;
  if (!code || typeof code !== 'string') {
    return res.status(400).json({ success: false, error: 'Parolni kiriting' });
  }

  const clean = code.trim().toUpperCase();
  if (clean === 'ADMIN24') {
    return res.json({ success: true, message: 'Kirish muvaffaqiyatli' });
  }
  return res.status(400).json({ success: false, error: 'Parol noto\'g\'ri. Qaytadan urinib ko\'ring.' });
});

// 2. Start Test
app.post('/api/test/start', (req, res) => {
  const { full_name, test_id_code, telegram_id } = req.body;
  if (!full_name || !full_name.trim()) {
    return res.status(400).json({ success: false, error: 'Ism va familiyangizni kiriting' });
  }
  if (!test_id_code || test_id_code.trim().toUpperCase() !== 'ADMIN24') {
    return res.status(400).json({ success: false, error: 'Parol noto\'g\'ri' });
  }

  const studentName = full_name.trim();
  const studentId = crypto.randomUUID();
  const sessionId = crypto.randomUUID();
  const recoveryToken = crypto.randomUUID();
  const startedAt = new Date();
  const expiresAt = new Date(startedAt.getTime() + (TEST_DURATION_SECONDS || 3600) * 1000);

  db.createStudent(studentId, studentName, telegram_id);
  db.createSession(sessionId, studentId, 'ADMIN24', startedAt.toISOString(), expiresAt.toISOString(), recoveryToken);

  res.json({
    success: true,
    data: {
      session_id: sessionId,
      recovery_token: recoveryToken,
      expires_at: expiresAt.toISOString(),
      student_name: studentName,
    },
  });
});

// 3. Get Questions
app.get('/api/test/questions', (req, res) => {
  const { session_id, recovery_token } = req.query;
  if (!session_id || !recovery_token) {
    return res.status(401).json({ success: false, error: 'Ruxsat berilmadi' });
  }

  const session = db.getSession(String(session_id));
  if (!session || session.recovery_token !== recovery_token) {
    return res.status(401).json({ success: false, error: 'Sessiya topilmadi' });
  }

  const clientQuestions = getClientQuestions();
  res.json({
    success: true,
    data: clientQuestions,
    total: clientQuestions.length,
  });
});

// 4. Save Answer
app.post('/api/test/save-answer', (req, res) => {
  const { session_id, recovery_token, question_id, answer } = req.body;
  if (!session_id || !recovery_token) {
    return res.status(401).json({ success: false, error: 'Ruxsat berilmadi' });
  }

  const session = db.getSession(String(session_id));
  if (!session || session.recovery_token !== recovery_token) {
    return res.status(401).json({ success: false, error: 'Sessiya topilmadi' });
  }

  let answers = {};
  try {
    answers = JSON.parse(session.answers || '{}');
  } catch {}

  answers[String(question_id)] = String(answer).toLowerCase();
  db.saveAnswer(session.id, JSON.stringify(answers));

  res.json({ success: true });
});

// 5. Submit Test
app.post('/api/test/submit', (req, res) => {
  const { session_id, recovery_token } = req.body;
  if (!session_id || !recovery_token) {
    return res.status(401).json({ success: false, error: 'Ruxsat berilmadi' });
  }

  const session = db.getSession(String(session_id));
  if (!session || session.recovery_token !== recovery_token) {
    return res.status(401).json({ success: false, error: 'Sessiya topilmadi' });
  }

  // Check if already completed
  const existing = db.getResultBySession(session.id);
  if (existing) {
    return res.json({ success: true, data: existing });
  }

  const student = db.getStudent(session.student_id);
  const studentName = student ? student.full_name : 'Student';

  let answers = {};
  try {
    answers = JSON.parse(session.answers || '{}');
  } catch {}

  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  for (const q of QUESTIONS) {
    const given = answers[String(q.id)];
    if (!given) {
      unanswered++;
    } else if (given.toLowerCase() === q.correct_answer.toLowerCase()) {
      correct++;
    } else {
      incorrect++;
    }
  }

  const score = correct;
  const level = calculateLevel(score);
  const completedAt = new Date().toISOString();
  const startedAt = new Date(session.started_at);
  const durationSeconds = Math.max(0, Math.floor((new Date().getTime() - startedAt.getTime()) / 1000));
  const resultId = crypto.randomUUID();

  const resultObj = {
    id: resultId,
    session_id: session.id,
    student_id: session.student_id,
    student_name: studentName,
    score,
    level,
    correct_count: correct,
    incorrect_count: incorrect,
    unanswered_count: unanswered,
    duration_seconds: durationSeconds,
    completed_at: completedAt,
  };

  db.saveResult(resultObj);
  db.completeSession(session.id, completedAt);

  res.json({ success: true, data: resultObj });
});

// 6. Get Result
app.get('/api/test/result/:id', (req, res) => {
  const result = db.getResult(req.params.id);
  if (!result) {
    return res.status(404).json({ success: false, error: 'Natija topilmadi' });
  }
  res.json({ success: true, data: result });
});

// Fallback to index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`===============================================`);
  console.log(`🚀 UNATION English Test (HTML/CSS/JS + SQLite)`);
  console.log(`📍 Web sayt: http://localhost:${PORT}`);
  console.log(`💾 SQLite DB: ${path.join(__dirname, 'data.sqlite')}`);
  console.log(`===============================================`);
});
