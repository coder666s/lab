function openForm() {
  document.getElementById("myForm").style.display = "block"; 
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


function submit() {

const name1 = document.querySelector("div.user-panel.main input[name='name']"), //получаем поле name
//phone = form.querySelector('[name="phone"]'), //получаем поле age
   // terms = form.querySelector('[name="terms"]'), //получаем поле terms
   // plan = form.querySelector('[name="plan"]'); //получаем поле plan

languages = [
  
  { форма: "Имя" , анкета: name1},
 // { name: phone, fileExtension: ".ts" },
  //{ name: "CoffeeScript", fileExtension: ".coffee" }
];
console.table(languages);
}
