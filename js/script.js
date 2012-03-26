/* Author: Kevin Finlayson */

function reorderHeader(){
  var viewportWidth = $(window).width();
  if( viewportWidth < 479 ) {
    /* if window width is 320 or smaller, switch the nav and profile, and add a class for styling */
    if('header[role=banner]:not.reordered') {
      /* only add the ‘reordered’ class if it hasn’t been added already */
      $('header[role=banner]').addClass('reordered');
    }
    $('nav[role]=banner').insertBefore('.profile');
  } else {
    /* swap the profile and nav back, and removed the ‘reordered’ class */
    $('header[role=banner]').removeClass('reordered');
    $('.profile').insertBefore('nav[role]=banner');
  }
}

$(window).resize(function(){
  reorderHeader();
})


$(document).ready(function(){
  reorderHeader();
});







