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
      name: "boots.pdf",
      url: "bootstrap1.pdf",
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
    }
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
