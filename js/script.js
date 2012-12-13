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
  console.log(pixelRatio);
  if (pixelRatio > 1) {
        $('img').each(function() {
        console.log("image");
        var retinaPath = $(this).data('retina');
        console.log(retinaPath);
        if (retinaPath !== "") {
          console.log("has retina path!!!");
          $(this).attr('src', retinaPath);
        }
    });
  }
});







