if (typeof(localStorage) == 'undefined') {
    document.getElementById("result").innerHTML =
      'Your browser does not support HTML5 localStorage. Try upgrading.';
  } else {
      $(".toggle").each(function(i, el) {
        if (localStorage['status' + i] == 'checked') {
          $(this).addClass('done');
        }
      });
  }
  $(document).ready(function() {
    $('.toggle').on('dblclick', function() {
      var $item = $(this).closest('.toggle');
      var index = $('.toggle').index($item);
      $item.toggleClass('done');
      if ($item.hasClass('done')) {
        localStorage.setItem('status' + index, 'checked');
      } else {
        localStorage.removeItem('status' + index);
      }
    });
  });

  $(document).ready(function() {
    $('.btn-success').on('click', function() {
      localStorage.clear();
    });
  });
 