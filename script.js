const scenes = {
  start: {
    image: "img/1v.jpg",
    text: "Ти стоїш перед Воротами Дрімливого Лісу — межа між звичайним світом і володінням магії. Поруч — табличка з написом: «Лише достойний увійде».",
    choices: [
      { text: "Увійти в ліс", next: "mysticClearing" },
      { text: "Оглянути табличку уважніше", next: "signReading" }
    ]
  },

  signReading: {
    image: "img/2v.jpg",
    text: "На табличці стародавніми рунами написано: «Кожен вибір — крок до долі. Не повертай назад».",
    choices: [
      { text: "Увійти в ліс", next: "mysticClearing" }
    ]
  },

  mysticClearing: {
    image: "img/3v.jpg",
    text: "Ти потрапляєш на галявину, де магічне світло світляків танцює в повітрі. Тут починаються три шляхи: до Руїн Архонів, у Печеру Шепотів і до Озера Віч.",
    choices: [
      { text: "Іти до Руїн Архонів", next: "ruinsOfArchons" },
      { text: "Зайти в Печеру Шепотів", next: "whisperingCave" },
      { text: "Пройти до Озера Віч", next: "lakeOfVeche" }
    ]
  },

  ruinsOfArchons: {
    image: "img/4v.jpg",
    text: "Руїни стародавніх магів — Архонів. У центрі — круг із рунами. У кутку лежить пошарпаний щоденник.",
    choices: [
      { text: "Прочитати щоденник", next: "journalEntry" },
      { text: "Спробувати активувати руни", next: "runePuzzle" }
    ]
  },

  journalEntry: {
    image: "img/5v.jpg",
    text: "Записи розповідають про ритуал, що відкриває прохід до Залів Пам’яті — таємної бібліотеки.",
    choices: [
      { text: "Повернутись до рун", next: "runePuzzle" }
    ]
  },

  runePuzzle: {
    image: "img/6v.jpg",
    text: "Ти активуєш руни, і відкривається портал до Залів Пам’яті.",
    choices: [
      { text: "Увійти в портал", next: "hallsOfMemory" }
    ]
  },

  hallsOfMemory: {
    image: "img/7v.jpg",
    text: "Ти у бібліотеці, де літаючі книги шепочуть давні істини. В одному з томів згадується про Артефакт Єдності.",
    choices: [
      { text: "Взяти книгу про Артефакт", next: "artifactClue" },
      { text: "Повернутись на галявину", next: "mysticClearing" }
    ]
  },

  artifactClue: {
    image: "img/8v.jpg",
    text: "Артефакт Єдності з'єднує всі стихії. Останній раз його бачили біля Озера Віч.",
    choices: [
      { text: "Іти до Озера Віч", next: "lakeOfVeche" }
    ]
  },

  whisperingCave: {
    image: "img/9v.jpg",
    text: "Темна печера. Зі стін лунають голоси. Один голос кличе тебе глибше, інший — попереджає.",
    choices: [
      { text: "Іти глибше", next: "caveDepths" },
      { text: "Повернутись", next: "mysticClearing" }
    ]
  },

  caveDepths: {
    image: "img/v10.jpg",
    text: "У глибині — камінь з кров’ю дракона. Його торкнутись — ризик або сила.",
    choices: [
      { text: "Торкнутись", next: "dragonBlood" },
      { text: "Не чіпати", next: "mysticClearing" }
    ]
  },

  dragonBlood: {
    image: "img/v11.jpg",
    text: "Ти відчуваєш силу вогню. У тебе з’явився новий шлях — до Гір Вогню.",
    choices: [
      { text: "Іти до Гір Вогню", next: "mountainsOfFlame" }
    ]
  },

  mountainsOfFlame: {
    image: "img/v12.jpg",
    text: "Гори палають. Ти бачиш вхід у Фортецю Іскри — володіння вогняних магів.",
    choices: [
      { text: "Увійти до фортеці", next: "fortressOfSpark" }
    ]
  },

  fortressOfSpark: {
    image: "img/v13.jpg",
    text: "Усередині тебе чекає Вогняний Страж. Він пропонує обмін: артефакт на секрет Стихії.",
    choices: [
      { text: "Прийняти", next: "elementalSecret" },
      { text: "Відмовитись", next: "mysticClearing" }
    ]
  },

  elementalSecret: {
    image: "img/v14.jpg",
    text: "Ти дізнаєшся про Сутність Вогню та отримуєш силу володіти однією з чотирьох стихій.",
    choices: []
  },

  lakeOfVeche: {
    image: "img/v15.jpg",
    text: "Озеро світиться сріблом. На березі — таємнича жриця та човен.",
    choices: [
      { text: "Поговорити з жрицею", next: "priestess" },
      { text: "Сісти в човен", next: "lakeJourney" }
    ]
  },

  priestess: {
    image: "img/v16.jpg",
    text: "Жриця каже, що Артефакт Єдності сховано на острові Посередині Озера.",
    choices: [
      { text: "Поплисти на острів", next: "islandOfUnity" }
    ]
  },

  lakeJourney: {
    image: "img/v17.jpg",
    text: "Під час подорожі озером тебе атакують водяні тіні.",
    choices: [
      { text: "Битись", next: "lakeBattle" },
      { text: "Стрибнути в воду", next: "underwaterEscape" }
    ]
  },

  lakeBattle: {
    image: "img/v18.jpg",
    text: "Ти перемагаєш, але човен розбитий. Доводиться плисти до острова.",
    choices: [
      { text: "Плисти до острова", next: "islandOfUnity" }
    ]
  },

  underwaterEscape: {
    image: "img/v19.jpg",
    text: "Під водою ти знаходиш стародавній храм. У ньому — частина артефакта.",
    choices: [
      { text: "Взяти частину", next: "islandOfUnity" }
    ]
  },
corruptionBegins: {
  image: "img/v20.jpg",
  text: "Голоси проникають у свідомість, нашіптуючи забуті істини та заборонені бажання. Ти відчуваєш, як частина тебе зникає…",
  choices: [
    { text: "Піддатись їм", next: "finalCorruption" },
    { text: "Протистояти з останніх сил", next: "finalMindShatter" }
  ]
},

  islandOfUnity: {
    image: "img/v21.jpg",
    text: "Острів оточений магічним туманом. У центрі — вівтар з Артефактом Єдності. Торкнутись?",
    choices: [
      { text: "Так", next: "finalUnity" },
      { text: "Ні", next: "corruptionBegins" }
    ]
  },

  finalUnity: {
    image: "img/v22.jpg",
    text: "Артефакт вибухає світлом. Ти відчуваєш зв’язок з усім світом. Сили всіх стихій течуть через тебе. Ти став Хранителем Рівноваги. Кінець.",
    choices: []
  }
},


finalMindShatter = {
  image: "img/v23.jpg",
  text: "Ти пручаєшся, кричиш, але голоси все гучніші. І раптом — тиша. Твій розум роздроблений на уламки. Ти живий, але вже не той, ким був. Кінець.",
  choices: []
};


let currentScene = "start";

// Відображення сцени: оновлення зображення, тексту та варіантів вибору
function renderScene(sceneKey) {
  const scene = scenes[sceneKey];
  currentScene = sceneKey;

  const image = document.getElementById("comic-image");
  const text = document.getElementById("comic-text");
  const choicesContainer = document.getElementById("choices");

  // Додаємо ефект зникнення
  image.classList.add("fade-out");
  text.classList.add("fade-out");
  choicesContainer.classList.add("fade-out");

  // Затримка для плавного переходу
  setTimeout(() => {
    image.src = scene.image;
    text.textContent = scene.text;
    choicesContainer.innerHTML = "";

    // Створення кнопок вибору
    scene.choices.forEach(choice => {
      const button = document.createElement("button");
      button.textContent = choice.text;
      button.onclick = () => renderScene(choice.next);
      choicesContainer.appendChild(button);
    });

    // Додаємо ефект появи
    image.classList.remove("fade-out");
    text.classList.remove("fade-out");
    choicesContainer.classList.remove("fade-out");
    image.classList.add("fade-in");
    text.classList.add("fade-in");
    choicesContainer.classList.add("fade-in");
  }, 400);
}

// Ініціалізація при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  renderScene(currentScene);
});




