(function () {
  var app = angular.module('store',  ['ngSanitize']);


    
    
  app.controller('panelController', function () {
    this.tab = 1;

    this.selectTab = function (setTab) {
      this.tab = setTab;
    };
    this.isSelected = function (sTab) {
      return this.tab === sTab;
    };

  });

  app.controller('StoreController', function () {
    this.products = prod;
    this.background = backs;
  });

  var backs = [{
		active: "",
		full: "http://www.paddongroup.com/paddon-fm-facilities-management-property-maintenance/wp-content/uploads/sites/3/home-slide11.jpg",
		alt: "",
		h2: "",
		par: "",
		text: ""
	},{
		active: "",
		full: "http://conferences.ektron.eu/img/londonhomebanner.jpg",
		alt: "",
		h2: "",
		par: "Home sweet home",
		text: ""
	},{
		active: "active",
		full: "http://www.bigtravel.se/assets/userfiles/england-london-telephone-covent-garden2000x400.jpg",
		alt: "",
		h2: "Phone",
		par: "being inside of London...",
		text: ""
	},{
		active: "",
		full: "http://a2.images.mywebroom.com/image/upload/f_auto,q_90/v1411590780/62526-collection--image_2-london-calling-banner.jpg",
		alt: "",
		h2: "",
		par: "",
		text: '<i class="fa fa-music"></i><i class="fa fa-music fa-lg"></i><i class="fa fa-music fa-2x"></i><i class="fa fa-music fa-3x"></i>'
	},{
		active: "",
		full: "http://www.manseandgarret.com/sites/default/files/styles/slider/public/Eye%20and%20Big%20Ben%20at%20dusk.jpg?itok=fGhpCLjA",
		alt: "",
		h2: "",
		par: "",
		text: ""
	}]
  var prod = [{
          name: 'Onions',
          full: 'http://2.imimg.com/data2/JM/NW/IMFCP-3681172/images-fresh-onion2-250x250.jpg',
	  
      },{
          name: 'Tomato',
          full: 'http://renaissancefarms.org/wp-content/uploads/sites/5/2014/12/Rugters-Tomato-Picture-150x150.jpg'
      },{
          name: 'Artichoke',
          full: 'http://images.pflanzen-bilder-kaufen.de/Artischocke-Bluete-lila_Cynara-scolymus01-150x150.jpg'
      },{
          name: 'Brussel sprout',
          full: 'http://touchstonesofthesacred.com/wp-content/uploads/2009/08/roasted-brussels-sprouts-fd-lg-1-150x150.jpg'
      },{
          name: 'Asparagus',
          full: 'http://www.globalhealingcenter.net/salud-natural/wp-content/uploads/2012/05/esparrago-150x150.jpg'
      },{
          name: 'Broccoli',
          full: 'http://harvestmoon.com.au/wp-content/uploads/2013/04/broccoliframed-150x150.png'
      },{
          name: 'Leek',
          full: 'https://www.plantsofdistinction.co.uk/stock/thumb/img000216.jpg'
      },{
          name: 'Cashew nut',
          full: 'http://p1.pkcdn.com/Tropical-fruit-Cashew-Cashew-361959.jpg'
      },{
          name: 'Abacaxi',
          full: 'http://poderdasfrutas.com/wp-content/uploads/2011/10/Abacaxi-Pequenos-frutos-150x150.jpg'
      },];


})();
