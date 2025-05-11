const allPotions = [
  { id: 1, name: "Зілля гриба", ingredients: ["червоний гриб", "синій кристал", "зміїне око"] },
  { id: 2, name: "Зілля тіні", ingredients: ["еліксир ночі", "зміїне око", "синій кристал"] },
  { id: 3, name: "Еліксир світла", ingredients: ["червоний гриб", "еліксир ночі", "листя ельфа"] },
  { id: 4, name: "Життєва есенція", ingredients: ["листя ельфа", "синій кристал", "зміїне око"] },
  { id: 5, name: "Потужне вариво", ingredients: ["еліксир ночі", "червоний гриб", "листя ельфа"] },
  { id: 6, name: "Очищаюча мікстура", ingredients: ["листя ельфа", "зміїне око", "червоний гриб"] },
  { id: 7, name: "Зілля прозріння", ingredients: ["синій кристал", "еліксир ночі", "листя ельфа"] },
  { id: 8, name: "Тіньова есенція", ingredients: ["зміїне око", "еліксир ночі", "червоний гриб"] },
  { id: 9, name: "Кристалічна рідина", ingredients: ["синій кристал", "листя ельфа", "червоний гриб"] },
  { id: 10, name: "Зілля зосередження", ingredients: ["еліксир ночі", "зміїне око", "листя ельфа"] }
];

// Випадковий вибір 5 зіль (тільки при першому запуску)
let potions = JSON.parse(getCookie('chosenPotions')) || [];

if (potions.length === 0) {
  const shuffled = [...allPotions].sort(() => Math.random() - 0.5);
  potions = shuffled.slice(0, 5);
  setCookie('chosenPotions', JSON.stringify(potions));
}
let selectedIngredients = [];

// 🍪 Робота з куки
function setCookie(name, value, days = 365) {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

// 🔄 Оновлення листка завдань
function updateOrderDisplay() {
  const list = document.getElementById("order-list");
  list.innerHTML = ""; // очищення

  if (currentPotionIndex < potions.length) {
    const li = document.createElement("li");
    li.textContent = `Зібрати: ${potions[currentPotionIndex].name}`;
    list.appendChild(li);
  } else {
    const li = document.createElement("li");
    li.textContent = "🎉 Завдання виконано!";
    list.appendChild(li);
  }
}

// 🔢 Отримати поточний індекс зілля
let currentPotionIndex = parseInt(getCookie('potionIndex')) || 0;

// Функція для логування на экран
function logMessage(message) {
  console.log(message); // сохраняем вывод в консоль

  // Получаем элемент с классом text_cauldron
  const textCauldron = document.querySelector('.text_cauldron');

  if (textCauldron) {
    const p = document.createElement('p');
    p.textContent = message;
    textCauldron.appendChild(p);

    // Прокручиваем к последнему сообщению
    textCauldron.scrollTop = textCauldron.scrollHeight;
  }
}

// 🎯 Клік по інгредієнту
function handleIngredientClick(ingredient) {
  if (currentPotionIndex >= potions.length) {
    logMessage("✅ Завдання виконано. Всі зілля зібрані.");
    return;
  }

  const currentPotion = potions[currentPotionIndex];
  const needed = currentPotion.ingredients;

  selectedIngredients.push(ingredient);

  // Перевірка правильності
  const correctSoFar = selectedIngredients.every((ing, idx) => ing === needed[idx]);

  if (!correctSoFar) {
    logMessage("❌ Неправильний інгредієнт! Почни спочатку.");
    selectedIngredients = [];
    return;
  }

  if (selectedIngredients.length === needed.length) {
    logMessage(`✅ ${currentPotion.name} зібрано!`);
    selectedIngredients = [];
    currentPotionIndex++;
    setCookie('potionIndex', currentPotionIndex);
    updateOrderDisplay();

    if (currentPotionIndex >= potions.length) {
      logMessage("🎉 Завдання виконано. Всі зілля зібрані!");
    } else {
      logMessage(`Наступне зілля: ${potions[currentPotionIndex].name}`);
    }
  } else {
    logMessage(`✅ Додано: "${ingredient}". Залишилось: ${needed.length - selectedIngredients.length}`);
  }
}

// ⏳ Очікуємо DOM
document.addEventListener("DOMContentLoaded", () => {
  const allImages = document.querySelectorAll('.ingredient');
  allImages.forEach(img => {
    img.addEventListener('click', () => {
      const ingredientName = img.getAttribute('data-name');
      handleIngredientClick(ingredientName);
    });
  });

  // Початкове повідомлення
  if (currentPotionIndex < potions.length) {
    logMessage(`Почни з зілля: ${potions[currentPotionIndex].name}`);
  } else {
    logMessage("🎉 Завдання виконано. Всі зілля зібрані!");
  }

  updateOrderDisplay();
});
document.getElementById('reset-game').addEventListener('click', () => {
  document.cookie = "potionIndex=0; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
  location.reload();
});

function animateCauldron() {
  const cauldron = document.querySelector('.cauldron');
  cauldron.classList.add('bubbling');
  setTimeout(() => cauldron.classList.remove('bubbling'), 600);
}
function markAsCompleted(index) {
  const listItems = document.querySelectorAll('#order-list li');
  const item = listItems[index];
  if (item) {
    item.classList.add('completed');
    setTimeout(() => {
      item.style.transform = 'translateY(-20px)';
    }, 100);
  }
}
function addNewOrder(potion) {
  const list = document.getElementById("order-list");
  const li = document.createElement("li");
  li.textContent = `Зібрати: ${potion.name}`;
  list.appendChild(li);
}
markAsCompleted(currentIndex); // поточний індекс
setTimeout(() => {
  addNewOrder(nextPotion);
}, 600);








// 🔮 Усі можливі зілля
// const allPotions = [
//   { id: 1, name: "Зілля гриба", ingredients: ["червоний гриб", "синій кристал", "зміїне око"] },
//   { id: 2, name: "Зілля тіні", ingredients: ["еліксир ночі", "зміїне око", "синій кристал"] },
//   { id: 3, name: "Еліксир світла", ingredients: ["червоний гриб", "еліксир ночі", "листя ельфа"] },
//   { id: 4, name: "Життєва есенція", ingredients: ["листя ельфа", "синій кристал", "зміїне око"] },
//   { id: 5, name: "Потужне вариво", ingredients: ["еліксир ночі", "червоний гриб", "листя ельфа"] },
//   { id: 6, name: "Очищаюча мікстура", ingredients: ["листя ельфа", "зміїне око", "червоний гриб"] },
//   { id: 7, name: "Зілля прозріння", ingredients: ["синій кристал", "еліксир ночі", "листя ельфа"] },
//   { id: 8, name: "Тіньова есенція", ingredients: ["зміїне око", "еліксир ночі", "червоний гриб"] },
//   { id: 9, name: "Кристалічна рідина", ingredients: ["синій кристал", "листя ельфа", "червоний гриб"] },
//   { id: 10, name: "Зілля зосередження", ingredients: ["еліксир ночі", "зміїне око", "листя ельфа"] }
// ];

// // 🍪 Робота з куками
// function setCookie(name, value, days = 365) {
//   const date = new Date();
//   date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
//   document.cookie = `${name}=${encodeURIComponent(value)}; expires=${date.toUTCString()}; path=/`;
// }

// function getCookie(name) {
//   const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
//   return match ? decodeURIComponent(match[1]) : null;
// }

// // 🔁 Випадковий вибір 5 зіль
// let potions = JSON.parse(getCookie('chosenPotions')) || [];
// if (potions.length === 0) {
//   const shuffled = [...allPotions].sort(() => Math.random() - 0.5);
//   potions = shuffled.slice(0, 5);
//   setCookie('chosenPotions', JSON.stringify(potions));
// }

// // 🔢 Поточний індекс
// let currentPotionIndex = parseInt(getCookie('potionIndex')) || 0;
// let selectedIngredients = [];

// // 📃 Оновлення листка замовлень
// function updateOrderDisplay() {
//   const list = document.getElementById("order-list");
//   list.innerHTML = "";

//   if (currentPotionIndex < potions.length) {
//     const li = document.createElement("li");
//     li.textContent = `Зібрати: ${potions[currentPotionIndex].name}`;
//     list.appendChild(li);
//   } else {
//     const li = document.createElement("li");
//     li.textContent = "🎉 Завдання виконано!";
//     list.appendChild(li);
//   }
// }

// // 💬 Вивід повідомлень
// function logMessage(message) {
//   console.log(message);
//   const textCauldron = document.querySelector('.text_cauldron');
//   if (textCauldron) {
//     const p = document.createElement('p');
//     p.textContent = message;
//     textCauldron.appendChild(p);
//     textCauldron.scrollTop = textCauldron.scrollHeight;
//   }
// }

// function handleIngredientClick(ingredient) {
//   if (currentPotionIndex >= potions.length) {
//     logMessage("✅ Завдання завершено.");
//     return;
//   }

//   const currentPotion = potions[currentPotionIndex];
//   const needed = [...currentPotion.ingredients]; // Копія, бо ми її редагуватимемо

//   if (selectedIngredients.includes(ingredient)) {
//     logMessage(`⚠️ Інгредієнт "${ingredient}" вже додано.`);
//     return;
//   }

//   selectedIngredients.push(ingredient);

//   // Перевірка — не більше 3-х інгредієнтів
//   if (selectedIngredients.length > 3) {
//     logMessage("❌ Забагато інгредієнтів! Почни спочатку.");
//     selectedIngredients = [];
//     return;
//   }

//   // Перевірка — чи всі вибрані є в рецепті
//   const isAllValid = selectedIngredients.every(ing => needed.includes(ing));
//   if (!isAllValid) {
//     logMessage("❌ Неправильний інгредієнт! Почни спочатку.");
//     selectedIngredients = [];
//     return;
//   }

//   // Якщо зібрано 3 — фінальна перевірка (незалежно від порядку)
//   if (selectedIngredients.length === 3) {
//     const sortedSelected = [...selectedIngredients].sort().join(',');
//     const sortedNeeded = [...needed].sort().join(',');

//     if (sortedSelected === sortedNeeded) {
//       logMessage(`✅ ${currentPotion.name} зібрано!`);
//       selectedIngredients = [];
//       currentPotionIndex++;
//       setCookie('potionIndex', currentPotionIndex);
//       updateOrderDisplay();

//       if (currentPotionIndex < potions.length) {
//         logMessage(`🔮 Наступне зілля: ${potions[currentPotionIndex].name}`);
//       } else {
//         logMessage("🎉 Вітаємо! Усі зілля готові.");
//       }
//     } else {
//       logMessage("❌ Неправильне поєднання! Почни спочатку.");
//       selectedIngredients = [];
//     }
//   } else {
//     const remaining = 3 - selectedIngredients.length;
//     logMessage(`✅ Додано: "${ingredient}". Залишилось ${remaining} інгредієнтів.`);
//   }
// }