$(document).ready(function () {

  /*
  1) получить кноку Меню, по которой будет клик
  2) получить мобильное меню
  3) прослушать клик по кнопке Меню и по клику то добавлять, то удалять класс active у моб меню
  4) то добавлять, то удалять класс active у кнопки Меню
  5) получить оверлей
  6) то добавлять, то удалять класс active у оверлей

  1) прослушать событие ресайз у окна
  2) у всех дивов убрать класс active
    */

    const mobMenuToggle = document.querySelector('.toggle-menu');
    const mobMenu = document.querySelector('.nav_list');
    const overlay = document.querySelector('#overlay');
    const body = document.querySelector('body');

    mobMenuToggle.addEventListener('click', function(){
      mobMenu.classList.toggle('active');
      this.classList.toggle('active');
      overlay.classList.toggle('active');
      body.classList.toggle('none-scroll');
    })

    window.addEventListener('resize', function(){
      mobMenu.classList.remove('active')
      mobMenuToggle.classList.remove('active')
      overlay.classList.remove('active')
      body.classList.remove('none-scroll');
    })


  // --- \/ fake-placeholder ---
  const formInputs = document.querySelectorAll(".form-field");

  for (let item of formInputs) {
    const inputPlaceholder = item.nextElementSibling;

    item.addEventListener("click", function () {
      inputPlaceholder.classList.add("active");
    });

    item.addEventListener("focus", function () {
      inputPlaceholder.classList.add("active");
    });

    item.addEventListener("blur", function () {
      if (this.value == "") {
        inputPlaceholder.classList.remove("active");
      }
    });
  }
  // --- /\ fake-placeholder ---

});

// $(document).ready(function () {

//     //-фильтрация проектов
//     let containerEl = document.querySelector('#portfolio-projects');

//     let mixer = mixitup(containerEl, {
//         classNames: {
//             block: ""
//         }
//     });

//     // - выравниваем   ширину карточек при фильтрации
//     const filterToggles = document.querySelectorAll('.portfolio-filter button'); // все кнопки-переключатели
//     const portfolioBigCards = document.querySelectorAll('.project-card'); // все карточки  работ

//     for (let i = 0; i < filterToggles.length; i++) {

//         filterToggles[i].addEventListener('click', function () {
//             if (i == 0) {

//                 for (let j = 0; j < 2; j++) {

//                     portfolioBigCards[j].classList.add('project-card_big')
//                 }

//             } else {

//                 for (let j = 0; j < 2; j++) {
//                     portfolioBigCards[j].classList.remove('project-card_big')
//                 }
//             }
//         });
//     }

// })
