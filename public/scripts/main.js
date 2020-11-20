var $toggles = $('.lists').on('click', function() {
    var checkedStates = $toggles.map(function() {
      return this.checked;
    }).get();
    localStorage.setItem('checkedStates', JSON.stringify(checkedStates));
    $(this).toggleClass('in');
  })
  
  if (localStorage.getItem('checkedStates')) {
    JSON.parse(localStorage.getItem('checkedStates')).forEach(function(checked, i) {
      $('.lists').eq(i).prop('checked', checked).toggleClass('in', checked)
    });
  }