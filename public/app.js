// UNATION English Placement Engine (Vanilla JS)
let currentSession = null;
let questions = [];
let currentIndex = 0;
let answers = {};
let timerInterval = null;
let remainingSeconds = 3600;

// Initialize Lucide icons on start
document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // Telegram Mini App auto expansion
  const tg = window.Telegram?.WebApp;
  if (tg) {
    tg.ready();
    tg.expand();
    const user = tg.initDataUnsafe?.user;
    if (user) {
      const name = [user.first_name, user.last_name].filter(Boolean).join(' ');
      const inputName = document.getElementById('input-name');
      if (inputName && name) inputName.value = name;
    }
  }
});

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Simple Router
function navigate(viewName) {
  const views = ['welcome', 'register', 'instructions', 'test', 'result'];
  views.forEach((v) => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.classList.add('hidden');
  });

  const target = document.getElementById(`view-${viewName}`);
  if (target) {
    target.classList.remove('hidden');
  }
  refreshIcons();
}

// Registration Handler
async function handleRegister(e) {
  e.preventDefault();
  const errorBox = document.getElementById('reg-error');
  const errorMsg = document.getElementById('reg-error-msg');
  const btn = document.getElementById('btn-register');

  errorBox.classList.add('hidden');

  const fullName = document.getElementById('input-name').value.trim();
  const password = document.getElementById('input-password').value.trim();

  if (!fullName) {
    showError('Iltimos, ism va familiyangizni kiriting.');
    return;
  }
  if (!password) {
    showError('Iltimos, kirish parolini kiriting.');
    return;
  }

  btn.disabled = true;
  btn.innerHTML = `<i data-lucide="loader-2" class="w-5 h-5 animate-spin"></i> Tekshirilmoqda...`;
  refreshIcons();

  try {
    const res = await fetch('/api/test/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        full_name: fullName,
        test_id_code: password,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Parol noto\'g\'ri.');
    }

    currentSession = data.data;
    navigate('instructions');
  } catch (err) {
    showError(err.message || 'Xatolik yuz berdi. Qaytadan urinib ko\'ring.');
  } finally {
    btn.disabled = false;
    btn.innerHTML = `<span>Continue to Test</span><i data-lucide="arrow-right" class="w-5 h-5"></i>`;
    refreshIcons();
  }
}

function showError(msg) {
  const errorBox = document.getElementById('reg-error');
  const errorMsg = document.getElementById('reg-error-msg');
  errorMsg.innerText = msg;
  errorBox.classList.remove('hidden');
  refreshIcons();
}

// Start Actual Test
async function startActualTest() {
  if (!currentSession) {
    navigate('register');
    return;
  }

  try {
    const res = await fetch(`/api/test/questions?session_id=${currentSession.session_id}&recovery_token=${currentSession.recovery_token}`);
    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error('Savollarni yuklab bo\'lmadi');
    }

    questions = data.data;
    currentIndex = 0;
    answers = {};

    document.getElementById('test-student-name').innerText = currentSession.student_name;

    // Start 60 minute countdown
    remainingSeconds = 3600;
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(updateTimer, 1000);

    navigate('test');
    renderQuestion(currentIndex);
    renderNavigator();
  } catch (err) {
    alert(err.message || 'Xatolik yuz berdi');
  }
}

// Timer Logic
function updateTimer() {
  remainingSeconds--;
  if (remainingSeconds <= 0) {
    clearInterval(timerInterval);
    alert('60 daqiqalik vaqt tugadi! Test natijangiz hisoblanmoqda...');
    submitTestNow();
    return;
  }

  const mins = Math.floor(remainingSeconds / 60);
  const secs = remainingSeconds % 60;
  const str = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  document.getElementById('test-timer').innerText = str;
}

// Render Active Question
function renderQuestion(index) {
  if (!questions || questions.length === 0) return;
  const q = questions[index];

  document.getElementById('q-current-num').innerText = q.id;

  // Section Badge
  const partBadge = document.getElementById('test-part-badge');
  if (q.section === 'A') {
    partBadge.innerText = 'Part A (Questions 1–50)';
  } else if (q.section === 'B') {
    partBadge.innerText = 'Part B (Questions 51–100)';
  } else {
    partBadge.innerText = 'Part C: Reading (Questions 101–120)';
  }

  // Reading Passage
  const readingCard = document.getElementById('reading-card');
  if (q.reading_passage) {
    document.getElementById('reading-title').innerText = q.reading_passage_title || 'Reading Comprehension';
    document.getElementById('reading-text').innerText = q.reading_passage;
    readingCard.classList.remove('hidden');
  } else {
    readingCard.classList.add('hidden');
  }

  // Question Text
  document.getElementById('q-text').innerText = q.question_text;

  // Status Badge
  const statusBadge = document.getElementById('q-status-badge');
  const selected = answers[String(q.id)];
  if (selected) {
    statusBadge.innerText = 'Answered';
    statusBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-md bg-green-50 text-green-700 border border-green-200';
  } else {
    statusBadge.innerText = 'Unanswered';
    statusBadge.className = 'text-[11px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 text-gray-500';
  }

  // Options
  const container = document.getElementById('q-options');
  container.innerHTML = '';

  const opts = [
    { key: 'a', text: q.option_a },
    { key: 'b', text: q.option_b },
    { key: 'c', text: q.option_c },
    { key: 'd', text: q.option_d },
  ].filter((o) => o.text !== undefined && o.text !== null);

  opts.forEach((opt) => {
    const isSelected = selected === opt.key;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => chooseOption(q.id, opt.key);

    const baseClass = "w-full text-left p-4 rounded-2xl border transition flex items-center justify-between text-sm font-medium";
    const activeClass = isSelected
      ? "bg-brand-red text-white border-brand-red shadow-md ring-2 ring-brand-red/30"
      : "bg-gray-50 hover:bg-gray-100 text-gray-800 border-gray-200";

    btn.className = `${baseClass} ${activeClass}`;
    btn.innerHTML = `
      <div class="flex items-center gap-3">
        <span class="w-7 h-7 rounded-lg flex items-center justify-center font-bold text-xs uppercase ${isSelected ? 'bg-white/20 text-white' : 'bg-gray-200 text-gray-700'}">${opt.key}</span>
        <span>${opt.text}</span>
      </div>
      ${isSelected ? '<i data-lucide="check" class="w-5 h-5 text-white"></i>' : ''}
    `;
    container.appendChild(btn);
  });

  // Prev / Next button state
  document.getElementById('btn-prev').disabled = index === 0;
  const btnNext = document.getElementById('btn-next');
  if (index === questions.length - 1) {
    btnNext.innerHTML = `Finish Test <i data-lucide="check-circle" class="w-4 h-4"></i>`;
    btnNext.onclick = confirmSubmit;
  } else {
    btnNext.innerHTML = `Next <i data-lucide="chevron-right" class="w-4 h-4"></i>`;
    btnNext.onclick = nextQuestion;
  }

  // Progress Bar
  const pct = Math.round(((index + 1) / questions.length) * 100);
  document.getElementById('test-progress-bar').style.width = `${pct}%`;

  refreshIcons();
}

// Choose Option & Save to SQLite
async function chooseOption(questionId, letter) {
  answers[String(questionId)] = letter;
  renderQuestion(currentIndex);
  renderNavigator();

  // Async save to backend
  try {
    fetch('/api/test/save-answer', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        question_id: questionId,
        answer: letter,
      }),
    });
  } catch (err) {
    console.error('Save answer error:', err);
  }
}

function prevQuestion() {
  if (currentIndex > 0) {
    currentIndex--;
    renderQuestion(currentIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function nextQuestion() {
  if (currentIndex < questions.length - 1) {
    currentIndex++;
    renderQuestion(currentIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

function jumpTo(index) {
  currentIndex = index;
  renderQuestion(currentIndex);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render 1..120 grid
function renderNavigator() {
  const grid = document.getElementById('navigator-grid');
  grid.innerHTML = '';

  let answeredCount = 0;

  questions.forEach((q, idx) => {
    const isAnswered = !!answers[String(q.id)];
    const isCurrent = idx === currentIndex;

    if (isAnswered) answeredCount++;

    const b = document.createElement('button');
    b.type = 'button';
    b.onclick = () => jumpTo(idx);

    let cls = "h-8 rounded-lg text-xs font-bold transition flex items-center justify-center ";
    if (isCurrent) {
      cls += "bg-gray-900 text-white ring-2 ring-gray-900 ring-offset-1";
    } else if (isAnswered) {
      cls += "bg-green-100 text-green-800 border border-green-300";
    } else {
      cls += "bg-gray-100 text-gray-500 hover:bg-gray-200";
    }

    b.className = cls;
    b.innerText = q.id;
    grid.appendChild(b);
  });

  document.getElementById('answered-counter').innerText = `${answeredCount} / ${questions.length} Answered`;
}

// Submit Test
function confirmSubmit() {
  const answeredCount = Object.keys(answers).length;
  const unanswered = 120 - answeredCount;
  const msg = unanswered > 0
    ? `Sizda ${unanswered} ta belgilanmagan savol bor. Testni yakunlamoqchimisiz?`
    : `Testni yakunlashga va natijangizni hisoblashga ishonchingiz komilmi?`;

  if (confirm(msg)) {
    submitTestNow();
  }
}

async function submitTestNow() {
  if (timerInterval) clearInterval(timerInterval);

  try {
    const res = await fetch('/api/test/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        session_id: currentSession?.session_id,
        recovery_token: currentSession?.recovery_token,
        answers: answers,
        student_name: currentSession?.student_name,
        started_at: currentSession?.started_at,
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.success) {
      throw new Error(data.error || 'Natijani hisoblab bo\'lmadi');
    }

    showResult(data.data);
  } catch (err) {
    alert(err.message || 'Xatolik yuz berdi');
  }
}

// Show Certificate
function showResult(res) {
  document.getElementById('res-student-name').innerText = res.student_name;
  document.getElementById('res-level').innerText = res.level.toUpperCase();
  document.getElementById('res-score').innerText = `${res.score}/120`;
  document.getElementById('res-percentage').innerText = `${Math.round((res.score / 120) * 100)}%`;
  document.getElementById('res-time').innerText = `${Math.round(res.duration_seconds / 60)}m`;

  document.getElementById('res-correct').innerText = res.correct_count;
  document.getElementById('res-incorrect').innerText = res.incorrect_count;
  document.getElementById('res-unanswered').innerText = res.unanswered_count;

  const dateStr = new Date(res.completed_at).toLocaleDateString('uz-UZ', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  document.getElementById('res-date').innerText = `Date: ${dateStr}`;

  navigate('result');
}
