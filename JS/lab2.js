
console.log("Номер 1");

number_1 = prompt("Номер 1, Введите число для модуля: ");

function absValue (number_1) {
if(number_1<0)
{
 return -number_1;
}
else
{
    return number_1;
}
}
console.log(absValue(number_1));

console.log("Номер 2");

word = prompt("Введите слово: ");

function isPalindrom(word){

    var len = word.length;
    var mid = Math.floor(len/2);

    for ( var i = 0; i < mid; i++ ) {
        if (word[i] !== word[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrom(word));

console.log("Номер 3");

function matrix(matrix1, matrix2){
matrix_answ = [];
s = "";
if(matrix1.length == matrix2.length)
{
    for ( i = 0; i < matrix1.length; i++)
    {
        matrix_answ[i] = [];
        for ( j = 0; j < matrix2[0].length; j++)
        {
           s += matrix_answ[i][j] = matrix1[i][j]+ matrix2[i][j];
           // console.log(matrix_answ[i][j]);
           s+=" ";
        }
        s+= "\n";
    }
    console.log(s);
}
else {
  console.log("Сложение матриц невозможно");
}
}
console.log(matrix([[12,20],[11,25]], [[12,20],[11,25]]))

console.log("Номер 4");

let student = {
    group: "201-324",
    last_name: "Васильев",
    first_name: "Михаил"
};
console.log("Список свойств: " + student.group + " " + student.last_name + " " + student.first_name)
console.log("Студент " + student.first_name + " " + student.last_name + " учится в группе " + student.group);


console.log("Номер 5");

/* Индекс слайда по умолчанию */
var slideIndex = 1;

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}