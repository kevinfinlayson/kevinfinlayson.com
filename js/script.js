/* Author: Kevin Finlayson */

$(document).ready(function(){


  $(function(){
    $('.slideshow').slides({
      container: 'slides-container',
      generatePagination: false,
      autoHeight: true
    });
  });

  // Retina image replacement

  var pixelRatio = !!window.devicePixelRatio ? window.devicePixelRatio : 1;
  if (pixelRatio > 1) {
        $('img').each(function() {
        var retinaPath = $(this).data('retina');
        if (retinaPath !== "") {
          $(this).attr('src', retinaPath);
        }
    });
  }
});







