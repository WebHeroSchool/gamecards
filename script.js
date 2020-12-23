const levelsItem = document.getElementsByClassName("level__item");
let numberCards = 3;
const header = document.getElementById("wrap");
const button = document.getElementById("button");
const gridContainer = document.body.children[1];
let openCard = document.querySelectorAll(".grid__card");
let countClick = 0;

//Выбор уровня:
let onClick = function (event) {
  event.preventDefault();

  for (let i = 0; i < levelsItem.length; i++) {
    levelsItem[i].classList.remove('level__item_active');
  }

  event.currentTarget.classList.add('level__item_active');
  let levelName = document.querySelector(".level__item_active").getAttribute("id");
  switch (levelName) {
    case 'easy':
      numberCards = 3;
      break;
    case 'medium':
      numberCards = 6;
      break;
    case 'hard':
      numberCards = 10;
      break;
  };
};

//Скрыть меню:
const invisible = function () {
  header.classList.toggle('invisible');
  header.classList.remove('header');
}

//Поворот карты:
let rotateCards = function (event) {
  event.preventDefault();
  countClick++;
  if (countClick < 2) {
  event.currentTarget.children[0].classList.toggle("rotate");
  } else {
    location.reload();
  }
};

//Создание карточного поля:
let createWrapCards = function () {
  const inner = "<div class='grid__card-inner'><div class='grid__card-front'></div><div class='grid__card-back'></div></div>";
  for (let i = 0; i < numberCards; i++) {
    let newCards = document.createElement ('div');
    newCards.classList = 'grid__card';
    gridContainer.appendChild(newCards);
    newCards.innerHTML = inner;
    newCards.addEventListener("click", rotateCards);
  }

  switch (numberCards) {
    case 3:
      gridContainer.classList.toggle('grid-easy');
      break;
    case 6:
      gridContainer.classList.toggle('grid-medium');
      break;
    case 10:
      gridContainer.classList.toggle('grid-hard');
      break;
  }

  let numRandom = [];
  for (let i = 0; i < numberCards; i++) { 
    const random = (Math.floor(Math.random() * 2) === 0);
 	  numRandom[i] = random; 
  }
  console.log(numRandom);

  let back = document.querySelectorAll('.grid__card-back');
  numRandom.forEach((i, k) => {
    if (i == true) {
      back[k].classList.toggle('grid__card-back-bag');
      back[k].classList.remove('grid__card-back');
    }
  });
};

//Выполнение функций:
for (let i = 0; i < levelsItem.length; i++) {
  levelsItem[i].addEventListener('click', onClick, false);
}
button.addEventListener("click", invisible);
button.addEventListener("click", createWrapCards);