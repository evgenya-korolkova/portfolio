$(document).ready(function () {

    // --- \/ fake-placeholder ---
    const formInputs = document.querySelectorAll('.form-field');

    for (let item of formInputs) {
        const inputPlaceholder = item.nextElementSibling;

        item.addEventListener('click', function(){
            inputPlaceholder.classList.add('active');
        })

        item.addEventListener('blur', function(){
            if(this.value == ''){
                inputPlaceholder.classList.remove('active');
            }
        })
    }
    // --- /\ fake-placeholder ---


})








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