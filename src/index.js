import 'bootstrap';

import './scss/index.scss';

$('#alert').click(() => {
  alert('jQuery works!');
});

// Your jQuery code
(function($) {
  $(function() {
    // DOM Ready

    // Toggle navigation
    $('#nav-toggle').click(function() {
      this.classList.toggle('active');
      // If sidebar is visible:
      if ($('body').hasClass('show-nav')) {
        // Hide sidebar
        $('body').removeClass('show-nav');
      } else {
        // If sidebar is hidden:
        $('body').addClass('show-nav');
        // Display sidebar
      }
    });
  });
})(jQuery);

$(function() {
  $('[data-toggle="tooltip"]').tooltip();
})(jQuery);
