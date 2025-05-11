const predictions = [
    "Сьогодні доля усміхнеться тобі у найнеочікуваніший момент.",
    "Остерігайся незнайомих створінь після заходу сонця.",
    "Твої алхімічні здібності розкриються в повну силу!",
    "Хтось поруч має до тебе магічний інтерес...",
    "Зілля, яке ти звариш наступним, змінить все.",
    "Не всі інгредієнти безпечні. Перевір двічі!",
    "Старий сувій відкриє тобі новий шлях.",
    "Твоя відвага принесе несподівану нагороду.",
    "Не забувай про силу дрібниць — саме вони вирішать результат.",
    "Поки ти читаєш це, хтось вже чекає на твою допомогу."
  ];
  let img  =  document.getElementById("magicBall")
  img.addEventListener("click", () => {
    img.src = "img/magic-ball.gif";
    const text = document.getElementById("predictionText");
    const randomPrediction = predictions[Math.floor(Math.random() * predictions.length)];
    text.textContent = randomPrediction;
    text.classList.remove("hidden");
    text.classList.add("show");
  });
  