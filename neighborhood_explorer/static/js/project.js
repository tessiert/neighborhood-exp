/* Project specific Javascript goes here. */

// Change active menu tab
$(document).ready(function () {
  $('li.active').removeClass('active');
  $('a[href="' + location.pathname + '"]')
    .closest('li')
    .addClass('active');
});

// Require valid search criteria to enable 'Submit' button for POI search
$(document).ready(function() {
  $('.poi_menu').on('input change', function() {
    if(!$('#point_of_interest').val() || !$('#radius').val() ||
      !$('#sort_method').val()) {
        $('#poi_submit').prop('disabled', true);        
      }
    else {
      $('#poi_submit').prop('disabled', false);
    }
  });
});