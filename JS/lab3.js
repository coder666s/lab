function openForm() {
  document.getElementById("myForm").style.display = "block"; 
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function submit(event) {
  let form = document.querySelector('myForm');
  let formData = new FormData(form);
  console.log(Array.from(formData));
}
  