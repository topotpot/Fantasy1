document.addEventListener("DOMContentLoaded", () => {
  const titles = document.querySelectorAll(".entry-title");

  titles.forEach(title => {
    title.addEventListener("click", () => {
      const currentContent = title.nextElementSibling;

      // Закриваємо всі інші відкриті блоки
      document.querySelectorAll(".entry-content.open").forEach(content => {
        if (content !== currentContent) {
          content.classList.remove("open");
        }
      });

      // Перемикаємо поточний блок
      currentContent.classList.toggle("open");
    });
  });
});