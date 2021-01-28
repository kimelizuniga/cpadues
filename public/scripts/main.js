let modalContainer = document.getElementById("modal");

function save(){
  // Get all checkbox inputs
  var inputs = document.querySelectorAll('input[type="checkbox"]');
  var arrData = [];
  // For each inputs...
  inputs.forEach(function(input){
    // ... save what you want (but 'ID' and 'checked' values are necessary)
    arrData.push({ id: input.id, checked: input.checked });
  });
  // Save in localStorage
  localStorage.setItem('inputs', JSON.stringify(arrData));
  console.log(JSON.stringify(arrData));
  // [
  //   {
  //     'id': 'ch1',
  //     'checked': false  // or true
  //   },
  //   ... and so on
  // ]
}

function load(){
  var inputs = JSON.parse(localStorage.getItem('inputs'));

  // For each inputs...
  inputs.forEach(function(input){
    // Set the 'checked' value
    if(document.getElementById(input.id) === null){
      console.log('One item was missing');
    } else {
      document.getElementById(input.id).checked = input.checked;
    }
  });
  console.log(localStorage);  
}

function addComplete() {
  let checkbox = document.querySelectorAll('input[type="checkbox"]');
  let complete = document.getElementById('completed');
  let completed = 0;

  checkbox.forEach(function(box){
    if(box.checked == true){
      completed++;
    }
  complete.innerHTML = completed;
  }
)}

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}

function showSchedule() {
  let scheduleOne = document.getElementById("scheduleOne");
  let modal = document.getElementById('modal');

  modal.style.display = "block";
  scheduleOne.style.display = "block";
  
}

function closeModal() {
  let modal = document.getElementById('modal');

  modal.style.display = "none";
}

$(document).ready(function () {
  load();
  addComplete();
});

$(window).keyup(function (e) {
  var key = e.which;
  if (key == 37) {
    plusSlides(-1);
    plusSlidesD(-1);
    plusSlidesI(-1);
  } else if (key == 39) {
    plusSlides(1);
    plusSlidesD(1);
    plusSlidesI(1);
  } else if (key == 27) {
    modalContainer.style.display = "none";
  }
});

window.onclick = function (event) {
  if (event.target == modalContainer) {
    modalContainer.style.display = "none";
  }
}