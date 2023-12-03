let step = 1;
function handleClick(event) {
  const bars = document.getElementById('bars');
  const cat = document.getElementById('cat');
  const footer = document.getElementById('myfooter');
  const who = document.getElementById('who');
  const text = document.getElementById('text');
  if (step === 1) {
    bars.style.opacity = 0.5;
    footer.hidden = !footer.hidden;
    step = 2;
  } else if (step === 2) {
    bars.style.opacity = 1;
    cat.style.opacity = 0.5;
    who.innerText="Барс";
    who.style.textAlign= 'right';
    text.innerText="Здравствуйте! Я - Барс, символ республики Татарстан. Добро пожаловать в Казань! Это невероятный город, вы знаете, что здесь есть одна из самых красивых мечетей - Кул-Шариф?";
    step = 3;
  }
  else if (step === 3) {
    text.innerText="Кул-Шариф - это историческая мечеть в Казани, построенная в 16 веке. Она была разрушена в 16 веке, но восстановлена в начале 21 века. Мечеть служит символом исламской культуры и истории Татарстана, и является одной из самых известных достопримечательностей города.";
    step=4;
  }
  else if (step === 4) {
    text.innerText="Татарская культура богата и разнообразна, она включает в себя множество традиций, обычаев, ремесел, музыки, танцев, кулинарии и многого другого. Татары - это тюркский народ, их культура имеет древние корни и передается из поколения в поколение. ";
    step=5;
  }
  else if (step === 5) {
    text.innerText="Одним из важных аспектов татарской культуры является музыка. Татарская музыка имеет свои уникальные инструменты, такие как кубыз , думбра  и многие другие.";
    step=6;
  }
  else if (step === 6) {
    text.innerText="Татарская кухня также заслуживает особого внимания. Она известна своими разнообразными блюдами, включая плов, манты, чак-чак.";
    step=7;
  }
  else if (step === 7) {
    bars.style.opacity = 0.5;
    cat.style.opacity = 1;
    who.innerText="Финик";
    who.style.textAlign= 'left';
    text.innerText="Спасибо, Барс!";
    step = 8;
  }
  else if (step === 8) {
    // document.addEventListener("click", handleClick);
    window.location.replace("../start.html");
  }
}
document.addEventListener("click", handleClick);
