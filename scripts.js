// scripts.js

$(document).ready(function(){
	/* CIRCLE & RECTANGLE */

    $('#circle-rectangle').on('click', function(event){
      $('#circle-rectangle').css({
        '-ms-transform': 'rotate(360deg)',
         '-moz-transform': 'rotate(360deg)',
         '-webkit-transform': 'rotate(360deg)',
         '-o-transform': 'rotate(360deg)',
         'transform': 'rotate(360deg)'
      });
    });

    /* HAMBURGER-MENU */

    $('#menu').on('click', function(event){
      $('#ul').css({
        'display': 'block'
      });
    });

    $('#iks').on('click', function(event){
      $('#ul').css({
        'display': 'none'
      });
    });
});

