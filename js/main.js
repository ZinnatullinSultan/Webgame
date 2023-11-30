
// document.addEventListener("click", handleClick1);

// function handleClick1(event) {
//   const footer = document.getElementById('myfooter');
//   const bars = document.getElementById('bars');
//   bars.style.opacity = 0.5;
//   footer.hidden = !footer.hidden;
//   document.removeEventListener("click", handleClick1);
// }


// function handleClick2(event) {
//   const bars = document.getElementById('bars');
//   const cat = document.getElementById('cat');
//   bars.style.opacity = 1;
//   cat.style.opacity = 0.5;
//   document.removeEventListener("click", handleClick2);
// }

// document.addEventListener("click", handleClick2);

let step = 1;

function handleClick(event) {
  const bars = document.getElementById('bars');
  const cat = document.getElementById('cat');
  const footer = document.getElementById('myfooter');

  if (step === 1) {
    bars.style.opacity = 0.5;
    footer.hidden = !footer.hidden;
    step = 2;
  } else if (step === 2) {
    bars.style.opacity = 1;
    cat.style.opacity = 0.5;
    step = 3;
  }
  else if (step === 3) {
    document.addEventListener("click", handleClick);
  }

}

document.addEventListener("click", handleClick);

















// function handleClick2(event) {
//   const bars = document.getElementById('bars1');
//   bars.style.opacity = 0.5;
//   footer.hidden = !footer.hidden;
//   document.removeEventListener("click", handleClick2);
// }
// document.addEventListener("click", handleCli);

// document.addEventListener('click', function(event) {
//   // Получаем элементы footer и изображения
//   const footerElement = document.querySelector('footer');
//   const imageElement = document.querySelector('.bar');

//   footerElement.hidden=!footerElement.hidden;
//   imageElement.style.opacity = 0.5; 
//   }
// );
// // Добавляем слушатель события клика на кнопку "Далее"
// document.getElementById('next').addEventListener('click', function() {
//   // Получаем элементы изображений
//   const image1Element = document.getElementById('ca');
//   const image2Element = document.getElementById('bar');

//   // Проверяем, прозрачность первого изображения
//   if (image1Element.style.opacity !== '0') {
//     // Если первое изображение не полностью непрозрачно, делаем его непрозрачным
//     image1Element.style.opacity = '0';
//     image2Element.style.opacity = '1'; // Второе изображение полностью непрозрачно
//   } else {
//     // Если первое изображение полностью непрозрачно, делаем его полупрозрачным
//     image1Element.style.opacity = '0.5'; // Пример полупрозрачности в 50%
//     image2Element.style.opacity = '1'; // Второе изображение полностью непрозрачно
//   }
// });

