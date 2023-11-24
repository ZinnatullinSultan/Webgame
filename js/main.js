var footer = document.getElementById("myfooter");

    // Создаем функцию для обработки клика
    function handleClick(event) {
      // Изменяем атрибут hidden на противоположное значение
      footer.hidden = !footer.hidden;
      // Удаляем обработчик события после первого вызова
      document.removeEventListener("click", handleClick);
    }

    // Добавляем обработчик клика для всего документа
    document.addEventListener("click", handleClick);