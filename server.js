const express = require('express');
const cors = require('cors');
const path = require('path');
const crypto = require('crypto');
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
  const { full_name, test_id_code } = req.body;
  if (!full_name || !full_name.trim()) {
    return res.status(400).json({ success: false, error: 'Ism va familiyangizni kiriting' });
  }
  if (!test_id_code || test_id_code.trim().toUpperCase() !== 'ADMIN24') {
    return res.status(400).json({ success: false, error: 'Parol noto\'g\'ri' });
  }

  const studentName = full_name.trim();
  const sessionId = crypto.randomUUID();
  const startedAt = new Date();
  const expiresAt = new Date(startedAt.getTime() + (TEST_DURATION_SECONDS || 3600) * 1000);

  res.json({
    success: true,
    data: {
      session_id: sessionId,
      recovery_token: sessionId,
      started_at: startedAt.toISOString(),
      expires_at: expiresAt.toISOString(),
      student_name: studentName,
    },
  });
});

// 3. Get Questions (sanitized without correct answers)
app.get('/api/test/questions', (req, res) => {
  const clientQuestions = getClientQuestions();
  res.json({
    success: true,
    data: clientQuestions,
    total: clientQuestions.length,
  });
});

// 4. Save Answer (Stateless acknowledge)
app.post('/api/test/save-answer', (req, res) => {
  res.json({ success: true });
});

// 5. Submit Test (Calculates score & level in-memory from submitted answers)
app.post('/api/test/submit', (req, res) => {
  const { answers = {}, student_name, started_at } = req.body;

  const studentName = student_name ? String(student_name).trim() : 'Student';
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  for (const q of QUESTIONS) {
    const given = answers[String(q.id)];
    if (!given) {
      unanswered++;
    } else if (String(given).toLowerCase() === String(q.correct_answer).toLowerCase()) {
      correct++;
    } else {
      incorrect++;
    }
  }

  const score = correct;
  const level = calculateLevel(score);
  const completedAt = new Date().toISOString();
  const startTime = started_at ? new Date(started_at).getTime() : Date.now();
  const durationSeconds = Math.max(0, Math.floor((Date.now() - startTime) / 1000));
  const resultId = crypto.randomUUID();

  const resultObj = {
    id: resultId,
    student_name: studentName,
    score,
    level,
    correct_count: correct,
    incorrect_count: incorrect,
    unanswered_count: unanswered,
    duration_seconds: durationSeconds,
    completed_at: completedAt,
  };

  res.json({ success: true, data: resultObj });
});

// 6. Get Result (Echo/Fallback)
app.get('/api/test/result/:id', (req, res) => {
  res.json({ success: true });
});

// Fallback to index.html for SPA routing
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Run server when started directly (e.g. node server.js or run-simple.bat)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`===============================================`);
    console.log(`🚀 UNATION English Test (Stateless JSON)`);
    console.log(`📍 Web sayt: http://localhost:${PORT}`);
    console.log(`===============================================`);
  });
}

module.exports = app;
