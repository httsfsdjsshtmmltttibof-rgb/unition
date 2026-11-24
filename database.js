const Database = require('better-sqlite3');
const path = require('path');

const dbPath = path.join(__dirname, 'data.sqlite');
const db = new Database(dbPath);

// Enable WAL mode for performance
db.pragma('journal_mode = WAL');

// Initialize tables
db.exec(`
  CREATE TABLE IF NOT EXISTS students (
    id TEXT PRIMARY KEY,
    full_name TEXT NOT NULL,
    telegram_id TEXT,
    created_at TEXT NOT NULL
  );

  CREATE TABLE IF NOT EXISTS test_sessions (
    id TEXT PRIMARY KEY,
    student_id TEXT NOT NULL,
    test_id_code TEXT NOT NULL,
    started_at TEXT NOT NULL,
    expires_at TEXT NOT NULL,
    status TEXT NOT NULL,
    answers TEXT DEFAULT '{}',
    recovery_token TEXT NOT NULL,
    completed_at TEXT
  );

  CREATE TABLE IF NOT EXISTS results (
    id TEXT PRIMARY KEY,
    session_id TEXT NOT NULL,
    student_id TEXT NOT NULL,
    student_name TEXT NOT NULL,
    score INTEGER NOT NULL,
    level TEXT NOT NULL,
    correct_count INTEGER NOT NULL,
    incorrect_count INTEGER NOT NULL,
    unanswered_count INTEGER NOT NULL,
    duration_seconds INTEGER NOT NULL,
    completed_at TEXT NOT NULL
  );
`);

module.exports = {
  db,
  createStudent(id, fullName, telegramId) {
    const stmt = db.prepare('INSERT INTO students (id, full_name, telegram_id, created_at) VALUES (?, ?, ?, ?)');
    stmt.run(id, fullName, telegramId || null, new Date().toISOString());
  },
  createSession(id, studentId, code, startedAt, expiresAt, recoveryToken) {
    const stmt = db.prepare('INSERT INTO test_sessions (id, student_id, test_id_code, started_at, expires_at, status, answers, recovery_token) VALUES (?, ?, ?, ?, ?, ?, ?, ?)');
    stmt.run(id, studentId, code, startedAt, expiresAt, 'active', '{}', recoveryToken);
  },
  getSession(id) {
    return db.prepare('SELECT * FROM test_sessions WHERE id = ?').get(id);
  },
  getSessionByToken(token) {
    return db.prepare('SELECT * FROM test_sessions WHERE recovery_token = ?').get(token);
  },
  saveAnswer(id, answersJson) {
    db.prepare('UPDATE test_sessions SET answers = ? WHERE id = ?').run(answersJson, id);
  },
  completeSession(id, completedAt) {
    db.prepare('UPDATE test_sessions SET status = ?, completed_at = ? WHERE id = ?').run('completed', completedAt, id);
  },
  saveResult(result) {
    const stmt = db.prepare(`
      INSERT INTO results (id, session_id, student_id, student_name, score, level, correct_count, incorrect_count, unanswered_count, duration_seconds, completed_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    stmt.run(
      result.id,
      result.session_id,
      result.student_id,
      result.student_name,
      result.score,
      result.level,
      result.correct_count,
      result.incorrect_count,
      result.unanswered_count,
      result.duration_seconds,
      result.completed_at
    );
  },
  getResult(id) {
    return db.prepare('SELECT * FROM results WHERE id = ?').get(id);
  },
  getResultBySession(sessionId) {
    return db.prepare('SELECT * FROM results WHERE session_id = ?').get(sessionId);
  },
  getStudent(id) {
    return db.prepare('SELECT * FROM students WHERE id = ?').get(id);
  }
};
