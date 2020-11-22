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

$(document).ready(function () {
  load();
  addComplete();
});