var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1} 
  slides[slideIndex-1].style.display = "block"; 
  setTimeout(showSlides, 5000);
}

var div = document.createElement('div');
div.id = 'python';
div.innerHTML = 'Python 60/100';
div.className = 'skills';
document.getElementById("javaskill-python").appendChild(div);

var div = document.createElement('div');
div.id = 'java';
div.innerHTML = 'Java 70/100';
div.className = 'skills';
document.getElementById("javaskill-java").appendChild(div);

var div = document.createElement('div');
div.id = 'html';
div.innerHTML = 'HTML 90/100';
div.className = 'skills';
document.getElementById("javaskill-html").appendChild(div);

var div = document.createElement('div');
div.id = 'css';
div.innerHTML = 'CSS 90/100';
div.className = 'skills';
document.getElementById("javaskill-css").appendChild(div);

var div = document.createElement('div');
div.id = 'js';
div.innerHTML = 'JavaScript 40/100';
div.className = 'skills';
document.getElementById("javaskill-js").appendChild(div);

var div = document.createElement('div');
div.id = 'ts';
div.innerHTML = 'TypeScript 0/100';
div.className = 'skills';
document.getElementById("javaskill-ts").appendChild(div);


function sConsole(event) {
    event.preventDefault();
    var nombre = document.getElementById("nform");
    var email = document.getElementById("eform");
    var mensaje = document.getElementById("sform");
    if (nombre == null && email == null && menaje == null){
        console.log("Los campos del formulario no estan correctamente ingresados, intente de nuevo")
    }else{
        var data = "Nombre: " + nombre + "Email: " + email + "Mensaje: " + mensaje;
    console.log(data.value);
    }
  }