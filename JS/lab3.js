

let modalButtons = document.getElementById('js-open-modal'),
overlay = document.querySelector('.overlay-modal'),
closeButtons = document.querySelector('.js-modal-close');
let modalElem = document.querySelector('.modal');
let push = document.querySelector('.push'),
info1 = document.getElementById('info1'),
info2 = document.getElementById('info2'),
body = document.querySelector('body');


modalButtons.addEventListener("click", (e) => {
event.preventDefault(); //предотвращение дефолтных событий браузера
modalElem.classList.add('active'); //акьтвирем окно
overlay.classList.add('active'); //активируем подложку
body.classList.add('active');


});



//let pole = docement.querySelectorAll('.pole')

info1.addEventListener("input", (e) => {

if (info1.validity.typeMismatch) {
    info1.setCustomValidity("Неправельный тип данных!");
    info1.classList.add('active');
}
else {
    info1.setCustomValidity("");
    info1.classList.remove('active');
}

if (info1.validity.valueMissing) {
    info1.setCustomValidity("Заполните пустые поля!");
    info1.classList.add('active');
}
else {
    info1.setCustomValidity("");
    info1.classList.remove('active');
}


});


info2.addEventListener("input", (e) => {

if (info2.validity.typeMismatch) {
    info2.setCustomValidity("Неправельный тип данных!");
    info2.classList.add('active');
}
else {
    info2.setCustomValidity("");
    info2.classList.remove('active');
}

if (info2.validity.valueMissing) {
    info2.setCustomValidity("Заполните пустые поля!");
    info2.classList.add('active');
}
else {
    info2.setCustomValidity("");
    info2.classList.remove('active');
}


});






push.addEventListener("click", (e) => {
event.preventDefault();
if(document.forms[0].reportValidity())
{

    let get1 = document.forms[0].elements['nameTeacher'].value;
    let get2 = document.forms[0].elements['nameLesson'].value;
    let get3 = document.forms[0].elements['lesson'].value;
    
    let data ={
        nameTeacher: get1,
        nameLesson: get2,
        lesson:get3
    };


    console.table(data);

    modalElem.classList.remove('active');
overlay.classList.remove('active');
body.classList.remove('active');

    
}


//document.checkValidity();
// // if (info2.checkValidity()){
// //     console.table([]);
// // }

// if (check.typeMismatch) info1.setCustomValidity("Неправильный тип у города назначения!");
// if (check.valueMissing) info2.setCustomValidity("Заполните город назначения!");



});

closeButtons.addEventListener("click", (e) => {
event.preventDefault();
modalElem.classList.remove('active');
overlay.classList.remove('active');
body.classList.remove('active');

});

document.addEventListener("click", (e) => {
if (e.target === overlay) {
    modalElem.classList.remove('active');
    overlay.classList.remove('active');
    body.classList.remove('active');
}

});