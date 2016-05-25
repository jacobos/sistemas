(function() {
  var app = angular.module('clase', []);
  app.controller('siClassController', function($scope, $timeout) {
    $scope.elements = elementArray;


    $scope.init = function() {
      //your code
    };

    //$timeout($scope.init);
  });


  var elementArray = [
    {
      name: "referencia 1",
      url: "http://getbootstrap.com/components/",
      orden: -100
    },{
      name: "referencia 2",
      url: "http://www.w3schools.com/bootstrap/",
      orden: -100
    },{
      name: "referencia 3 (examples)",
      url: "http://getbootstrap.com/getting-started/",
      orden: -100
    },{
      name: "boots1.pdf",
      url: "bootstrap1.pdf",
      orden: -100
    },{
      name: "boots2.pdf",
      url: "bootstrap2.pdf",
      orden: -100
    },{
      name: "boots3.pdf",
      url: "bootstrap3.pdf",
      orden: -100
    }, {
      name: "initial",
      url: "01_initial.html",
      orden: -100
    }, {
      name: "col-md-6",
      url: "01_hello_world.html",
      orden: -100
    }, {
      name: "container fluid",
      url: "02_container-fluid.html",
      orden: -100
    }, {
      name: "container (no fluid)",
      url: "02_container-nofluid.html",
      orden: -100
    }, {
      name: "sm y md's",
      url: "01_clase1.html",
      orden: -100
    }, {
      name: "row inside col",
      url: "01_row_inside_col.html",
      orden: -100
    }, {
      name: "offset",
      url: "04_offset.html",
      orden: -100
    }, {
      name: "visible",
      url: "05_visible.html",
      orden: -100
    }, {
      name: "clearfix",
      url: "06_clearfix.html",
      orden: -100
    }, {
      name: "col_row_inside_visible_clearfix_mediaquery",
      url: "06_col_row_inside_visible_clearfix_mediaquery.html",
      orden: -100
    }, {
      name: "3col y 2 col",
      url: "03_3col_2col.html",
      orden: -100
    }, {
      name: "3col y 2 col, misma altura",
      url: "03_3col_2_col_mismos_height.html",
      orden: -100
    }, {
      name: "ejercicio matchHeight + media query",
      url: "img/ej_media_matchheight.jpg",
      orden: -100
    },{
      name: "reordenando (push and pull)",
      url: "09_ordenando.html",
      orden: -100
    },{
      name: "buttons 1",
      url: "11_buttons_1.html",
      orden: -100
    },{
      name: "buttons 2, dropdown&up",
      url: "11_buttons_2.html",
      orden: -100
    },{
      name: "dropdown hover",
      url: "11_buttons_hover.html",
      orden: -100
    },{
      name: "inputs",
      url: "12_inputs.html",
      orden: -100
    },{
      name: "navbar and panel",
      url: "13_navbar_and_panel.html",
      orden: -100
    },{
      name: "lion exercise",
      url: "16_ejercicio_leon.html",
      orden: -100
    },{
      name: "jumbo and carousel",
      url: "17_jumbo_carousel.html",
      orden: -100
    },{
      name: "jumbo and carousel container",
      url: "17_jumbo_carousel_container.html",
      orden: -100
    },{
      name: "jumbo and carousel gradient",
      url: "17_jumbo_carousel_gradient.html",
      orden: -100
    },{
      name: "otro carousel",
      url: "https://getbootstrap.com/examples/carousel/",
      orden: -100
    },{
      name: "tables",
      url: "19_tables.html",
      orden: -100
    },{
      name: "navbar fixed autohide",
      url: "14_navbar_fixed_que_se_esconde.html",
      orden: -100
    },{
      name: "headings, text, blockquote, etc.",
      url: "18_headings_text_and_more.html",
      orden: -100
    },{
      name: "footer",
      url: "21_footer.html",
      orden: -100
    },{
      name: "table con paginacion",
      url: "15_table_con_paginacion.html",
      orden: -100
    },{
      name: "img",
      url: "22_images.html",
      orden: -100
    },{
      name: "modal, alert",
      url: "26_modal_alert_well.html",
      orden: -100
    },{
      name: "menu con scroll y divs ajustados 100%",
      url: "23_menu_scroll_animals.html",
      orden: -100
    },{
      name: "efecto parallax",
      url: "24_bootstrap_parallax.html",
      orden: -100
    },{
      name: "efecto parallax, estilos",
      url: "24_bootstrap_parallax_estilizado.html",
      orden: -100
    },{
      name: "flex",
      url: "25_flex.html",
      orden: -100
    },{
      name: "animate css",
      url: "30_animate.html",
      orden: -100
    },{
      name: "animate css + wow",
      url: "31_animate_wow.html",
      orden: -100
    },{
      name: "ejercicio 1",
      url: "ejercicio_bootstrap.gif",
      orden: -100
<<<<<<< HEAD
=======
    },{
      name: "ejercicio 2",
      url: "32_ejercicio.png",
      orden: -100
    },{
      name: "ejercicio 3",
      url: "33_ejercicio.gif",
      orden: -100
    },{
      name: "ejercicio 3 imgs",
      url: "33_imagenes.txt",
      orden: -100
    },{
      name: "git pdf",
      url: "https://github.com/jacobos/bootstrap-examples/raw/master/gitting.pdf",
      orden: -100
    },{
      name: "my git",
      url: "https://github.com/jacobos/bootstrap-examples",
      orden: -100

>>>>>>> 94c7e9aa8ccc9b22c658ec82fd21399ff7c50183
    }/*,{
      name: "ejercicio",
      url: "27_ejercicio.gif",
      orden: -100
    }*/
  ];
})();


/*

b = a.map(function (el) {
  console.log({
    name: el.name.trim(),
    desc: el.desc,
    url: el.url.trim()
  });
});
b = a.map(function (el) {
  var ob = {};
  ob.name = el.name.trim();
  ob.desc = el.desc.trim();
  ob.url = el.url.trim();
  return ob;
});
*/
