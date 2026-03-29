(function() {
  'use strict';

  // Firebase config (тот же проект anomaly-chat)
  const FIREBASE_CONFIG = {
    apiKey: "AIzaSyCLGYlEA0jo9Zxcw5Lpm-ONsS8cwsI2rY8",
    authDomain: "anomaly-chat.firebaseapp.com",
    databaseURL: "https://anomaly-chat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "anomaly-chat",
    storageBucket: "anomaly-chat.firebasestorage.app",
    messagingSenderId: "869455865759",
    appId: "1:869455865759:web:7ccac49785a3a69b0abfaa"
  };

  // Список клана (из файла)
  const CLAN_LIST = [
    ["EvgeniY", "Евгений"],
    ["Дайро", "Серёга"],
    ["SLash", "Дима_J"],
    ["integra", "Сергей"],
    ["Домрачей", "Дима"],
    ["СнегоVик", "СеРж"],
    ["Vandellia", "Ванделия"],
    ["1Katar1", ""],
    ["End76", "Лёша_J"],
    ["Череп@шка", "Катя_J"],
    ["дочь_луны", "Лу"],
    ["Мелодька", "Марина_J"],
    ["~Шлюпка~", "Настя"],
    ["~АдаНет~", "Ада"],
    ["Godjy", "Лена"],
    ["Мерак", "Серега_K"],
    ["ЮльЧиk", "Лёша_J"],
    ["Godsik", "Сергей"],
    ["Алана_", "Алана"],
    ["Лирия!", "Лир"],
    ["ЛИЛУРИЯ", "Максим"],
    ["_Emma__cass", "Катя_J"],
    ["Оркадий", "Костя"],
    ["crone", "Лёша"],
    ["Сырный", "Анна"],
    ["DeadPonny", "Лёха"],
    ["XayJI", "Тимофей"],
    ["Рита_ня", "Рита"],
    ["МУРЗЯ", "Мурзик"],
    ["Мурзиk", "Андрей"],
    ["Мурчи", "Мурзиk"],
    ["Муся", "Андрей"],
    ["xRaideRxx", "Саша"],
    ["Неферут", "Вика"],
    [":Мур:", ""],
    ["МорфЗоо", "Сергей"],
    ["MilaN_", ""],
    ["Юнга_", "Vandelli"],
    ["BaJlyH", "Vandelli"],
    ["хилька", ""],
    ["ЛедиСкуф", "Кирилл"],
    ["Voidstep√", "Сергей"],
    ["В_Кедах", "Владимир"],
    ["Кнопоська", ""],
    ["DROPLEX", "Саша_U"],
    ["А с у ν α", "Андрей_J"],
    ["Courier~", "Ёжик"],
    ["Sиничка", "Наташа"],
    ["1ДЕМОН3", "Антон"],
    ["Keron277", "Кира"],
    ["МИSТИК", "Таня_J"],
    ["SSlon", "Вова_G"],
    ["Slonlon", "Вова_G"],
    ["БорЩиК", "Марина_J"],
    ["Железор", "Рома"],
    ["~Editaa~", "Эдит"],
    ["Terriam", "Терри"],
    ["NATSUMИ", "Таня_J"],
    ["Bum_fnx", "Сергей_K"],
    ["МАРиНАД", "МариНадя"],
    ["СиСяСтая_atlas", "Алиса"],
    ["Notius", "Сергей_J"],
    ["учитель19", "Анатолий"],
    ["Reaperus", "Сергей_J"],
    ["Ихдеан", "Андрей"],
    ["МИFА", "Таня_J"],
    ["ГЛИНТВЕЙН", "Таня_J"],
    ["IDiamondI", "Дима"],
    ["Veta1983", "Света_J"],
    ["ИМПИН", "Лена"],
    ["Хан\"Соло", "Хан"],
    ["ЛиЛиТкА", "Марина"],
    ["Chaikovsk", "Чайка"],
    ["дышать", "Игорь"],
    ["Наяра", "Терри"],
    ["МАРиHAD", "МариНадя"],
    ["=Морана=", "Света_J"],
    ["HomeleSS", "Вова_G"],
    ["Слабоумие", "Саша_U"],
    ["Dementra!", "Афродита"],
    ["CMOTPU", "Алёна"],
    ["Оленёнок", ""],
    ["Nendans", "Данил"],
    ["keycat", "Кот"],
    ["!Душнила!", "Сёма"],
    ["Mira94", "Яна"],
    ["Коринн", "Лена"],
    ["GURON47", "Миша"],
    ["Paramed", "Валера"],
    ["Мармелад", "Вика"],
    ["Зурайя", "Вика"],
    ["Думм", "Саня"],
    ["ИskrA", "Искра"],
    ["★Aurelia★", "Юлия"],
    ["dacota", "Алексей"],
    ["OriginalF", "Денис_J"],
    ["Саймири", "Елена"],
    ["Байкер", "Елена_J"],
    ["ЗюЗЯ", "Зюзя"],
    ["(Раст)", "Олег"],
    ["SekiGone_oberon", "Зюзя"],
    ["ВОИН", "Елена_J"],
    ["Emerald", "Елена_J"],
    ["Nebiros", "Елена_J"],
    ["Тупица", "Саша_J"],
    ["Μεγυμιν", "Андрей_J"],
    ["Лукки", ""],
    ["ВэйСяокот", ""],
    ["MiniOrig", "Денис_J"],
    ["(LisichA)", "Анатолий"],
    ["Timonia", "Аня"],
    ["Рислинг", "Саша_J"],
    ["Тигра1975", "Искра"],
    ["Khalisy", "Женя"],
    ["ЯдовитаЯ ♀", "Игорь_J"],
    ["НацисТ", "Андрей_Z"],
    ["RabidFox", "Таня_R"],
    ["MiHelGa", "Хеля"],
    ["xXOleGXx", "Олег"],
    ["_МечтА_", "Ксю"],
    ["Гитадрист", "Илья"],
    ["Джили", "Валя"],
    ["Prequel", "Дима_J"],
    ["Алекссия", "Таня_R"],
    ["НокиА3210", "Серега"],
    ["~Тайпан~", "Хома"],
    ["Химеко", "Саша_J"],
    ["ЮйшиХуан", "Наташа_J"],
    ["badabym_fenix", "Сергей_K"],
    ["МуЦин", "Наташа_J"],
    ["П_э_Й_н", "Ден_J"],
    ["ЛинВэнь_oberon", "Наташа_J"],
    ["Lagovaz", ""],
    ["ГлавПчёл", ""],
    ["麻美_火魔天狗", "Астрид"],
    ["ВинниПЫХ", ""],
    ["MariJuana", "Настя"],
    ["EXIT>", "Даша"],
    ["~Лесечка~", "Леся"],
    ["ТАДЭО", "Иван"],
    ["★LUCIFER★", "Евгений"],
    ["Вспышка", "Влад"],
    ["FL~Айви", "Тимур"],
    ["VARcheLLo", "Игорь"],
    ["Жемчужин@", "МариНадя"],
    ["Internista", "БУМ"],
    ["V R E D N A Y A", "Андрей_J"],
    ["_Б@RД_88", "Маргоша"],
    ["F18", "Коля"],
    ["ER@L@SHK@", "Руслан"],
    ["}ZiQ{", "Игорь"],
    ["ДОМБОЙ006", "Танцор"],
    ["Xenosaga`", "Серега_K"],
    ["ДОМБОЙ007", "Танцор"],
    ["нагиев", "Влад"],
    ["Ливрен", "Аня"],
    ["Михильсон", "Миша"],
    ["den253", "Ден"],
    ["(●_●)DryG", "Мальвина"],
    ["zaKidon", "Андрей_Z"],
    ["Я_ХОЧУ_ТЕБЯ", "Виталик"],
    ["галька", "Эйджи"],
    ["Чибалдос", "Ден_J"],
    ["ЗлыднЯ", "Сергей_K"],
    ["weo", "Даша"],
    ["нитакуся", ""],
    ["PANDORA°", "Аня"],
    ["RaiLy", "Люси"],
    ["чопопало_oberon", ""],
    ["Morg`", ""],
    ["imx", "Антон"],
    ["★Бэйли★", "Галя"],
    ["Брунька", "Санька"],
    ["[E]cstasy", "Никита"],
    ["Кастыль5", "Костя"],
    ["ШпионФафн", "Саня"],
    ["StRlЖ", "Максим"],
    ["FoX_News", "Павел"],
    ["oceanslez", "Лена"],
    ["СестрёнкА", "Света"],
    ["~Атль~", "Атль"],
    ["LetMeDown", "Фарш"],
    ["KOROLEWA", "Сестрёнк"],
    ["коломна41", "Влад"],
    ["Maranta", "Туня"],
    ["Точер!", ""],
    ["Риниана", "Алёна"],
    ["MURZЯ", ""],
    ["наталия33", ""],
    ["Insomnia2", "Лера"],
    ["Спартанус", ""],
    ["З_Зарница", ""],
    ["Мяути", "Алла"],
    ["Радость", "Аня"],
    ["HildegarD", "Таня"],
    ["Piterskiy", "Рома"],
    ["[KAИN]", ""]
  ];

  // --- Init Firebase ---
  firebase.initializeApp(FIREBASE_CONFIG);
  const db = firebase.database();
  const checksRef = db.ref('clan-checklist/checks');

  // --- DOM ---
  const authScreen = document.getElementById('auth-screen');
  const mainScreen = document.getElementById('main-screen');
  const nickInput = document.getElementById('nick-input');
  const loginBtn = document.getElementById('login-btn');
  const logoutBtn = document.getElementById('logout-btn');
  const currentUserEl = document.getElementById('current-user');
  const clanList = document.getElementById('clan-list');
  const searchInput = document.getElementById('search-input');
  const checkedCountEl = document.getElementById('checked-count');
  const totalCountEl = document.getElementById('total-count');
  const progressText = document.getElementById('progress-text');
  const progressFill = document.getElementById('progress-fill');

  let currentUser = localStorage.getItem('clan_checklist_user') || '';
  let checksData = {};

  // Загрузить локальные данные сразу
  try {
    const saved = localStorage.getItem('clan_checklist_data');
    if (saved) checksData = JSON.parse(saved);
  } catch(e) {}

  // --- Авторизация ---
  function showAuth() {
    authScreen.style.display = 'flex';
    mainScreen.style.display = 'none';
    nickInput.focus();
  }

  function showMain() {
    authScreen.style.display = 'none';
    mainScreen.style.display = 'block';
    currentUserEl.textContent = currentUser;
    renderList();
    listenChecks();
  }

  function login() {
    const nick = nickInput.value.trim();
    if (!nick) return;
    currentUser = nick;
    localStorage.setItem('clan_checklist_user', nick);
    showMain();
  }

  loginBtn.addEventListener('click', login);
  nickInput.addEventListener('keydown', e => { if (e.key === 'Enter') login(); });
  logoutBtn.addEventListener('click', () => {
    currentUser = '';
    localStorage.removeItem('clan_checklist_user');
    showAuth();
  });

  // --- Ключ для Firebase (безопасный, уникальный) ---
  function safeKey(nick, index) {
    // Убираем все запрещённые Firebase символы + пробелы для надёжности
    let key = nick.replace(/[.#$\/\[\]\s]/g, '_');
    // Добавляем индекс для гарантии уникальности
    return key + '__' + index;
  }

  // --- Рендер списка ---
  function renderList(filter) {
    clanList.innerHTML = '';
    const f = (filter || '').toLowerCase();
    let total = 0, checked = 0;

    CLAN_LIST.forEach(([nick, title], i) => {
      if (f && !nick.toLowerCase().includes(f) && !title.toLowerCase().includes(f)) return;

      total++;
      const key = safeKey(nick, i);
      const info = checksData[key];
      const isChecked = info && info.checked;
      if (isChecked) checked++;

      const tr = document.createElement('tr');
      if (isChecked) tr.classList.add('checked-row');

      tr.innerHTML = `
        <td class="check-cell">
          <input type="checkbox" data-key="${key}" data-nick="${nick}" ${isChecked ? 'checked' : ''}>
        </td>
        <td class="col-nick">${escHtml(nick)}</td>
        <td class="col-title">${escHtml(title)}</td>
        <td class="col-who">${isChecked && info.by ? escHtml(info.by) : ''}</td>
      `;

      const cb = tr.querySelector('input[type="checkbox"]');
      cb.addEventListener('change', () => toggleCheck(key, nick, cb.checked));

      clanList.appendChild(tr);
    });

    const totalNum = CLAN_LIST.length;
    const checkedNum = Object.values(checksData).filter(v => v && v.checked).length;
    totalCountEl.textContent = totalNum;
    checkedCountEl.textContent = checkedNum;
    const pct = totalNum > 0 ? (checkedNum / totalNum * 100) : 0;
    progressText.textContent = `${checkedNum} / ${totalNum}`;
    progressFill.style.width = pct + '%';
  }

  function escHtml(s) {
    const d = document.createElement('div');
    d.textContent = s;
    return d.innerHTML;
  }

  // --- Toggle галочки ---
  function toggleCheck(key, nick, checked) {
    // Обновляем UI сразу (не ждём Firebase)
    if (checked) {
      checksData[key] = { checked: true, by: currentUser, at: Date.now() };
    } else {
      delete checksData[key];
    }
    renderList(searchInput.value);
    saveLocal();

    // Синхронизируем с Firebase (если доступен)
    try {
      if (checked) {
        checksRef.child(key).set(checksData[key]);
      } else {
        checksRef.child(key).remove();
      }
    } catch(e) {}
  }

  // --- Локальное хранение (fallback) ---
  function saveLocal() {
    try {
      localStorage.setItem('clan_checklist_data', JSON.stringify(checksData));
    } catch(e) {}
  }

  function loadLocal() {
    try {
      const saved = localStorage.getItem('clan_checklist_data');
      if (saved) checksData = JSON.parse(saved);
    } catch(e) {}
  }

  // --- Слушаем Firebase ---
  function listenChecks() {
    checksRef.on('value', snap => {
      const remote = snap.val() || {};
      // Мержим: remote данные поверх локальных
      checksData = Object.assign({}, checksData, remote);
      saveLocal();
      renderList(searchInput.value);
    }, () => {
      // Firebase недоступен — работаем локально
      console.log('Firebase offline, using local data');
    });
  }

  // --- Поиск ---
  searchInput.addEventListener('input', () => {
    renderList(searchInput.value);
  });

  // --- Старт ---
  if (currentUser) {
    showMain();
  } else {
    showAuth();
  }
  document.body.classList.add('ready');
})();
