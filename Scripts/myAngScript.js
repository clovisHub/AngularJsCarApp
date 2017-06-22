/// <reference path="angular.min.js" />
/// <reference path="angular-route.min.js" />

var myCarApp = angular.module('myCarApp', ['ngRoute'])

                      .config(function ($routeProvider, $locationProvider) {

                          $routeProvider.when('/Home', {

                              controller: 'HomeController',
                              templateUrl: 'Views/Home.html'

                          })
                              .when('/Info', {

                                  controller: 'InfoController',
                                  templateUrl: 'Views/Info.html'

                              })
                              .when('/Text', {

                                   controller: 'TextController',
                                   templateUrl: 'Views/TextTest.html'

                               })
                              .when('/Partners', {
                                  templateUrl: 'Views/Partners.html',
                                  controller: 'PartnersController'
                              })
                              .when('/Aunction', {
                                  templateUrl: 'Views/Aunction.html',
                                  controller: 'AunctionController'
                              })
                              .otherwise({

                                  //redirecto: '/Home'
                                  controller: 'HomeController',
                                  templateUrl: 'Views/Home.html'

                              })

                          $locationProvider.html5Mode(true);

                      });

myCarApp.controller('HomeController', function ($scope) {

    var obj = {};

    $scope.styl= { maxHeight:'', minWidth :'', maxWidth : '', minHeight:''}
    $scope.title = 'Cars';
    $scope.cars = [
                       {
                           name:{nom: 'Bentley', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Bentley.png',
                           price: '$300',
                           cart: '_cart',
                           id:'1'
                          
                       },
                       {
                           name : { nom: 'Bugatti', minHeight: '150px', maxHeight: '150px', minWidth: '248px', maxWidth: '250px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/Bugatti.jpg',
                           price: '$450',
                           cart: '_cart',
                           id: '2'
                       },
                       {
                           name: { nom: 'Cadillac', minHeight: '150px', maxHeight: '150px', minWidth: '248px', maxWidth: '250px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/Cadillac.jpg',
                           price: '$130',
                           cart: '_cart',
                           id: '3'
                           
                       },
                       {
                           name: { nom: 'B.M.W',  minHeight: '150px', maxHeight: '150px', minWidth: '248px', maxWidth: '250px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/bmw.jpg',
                           price: '$350',
                           cart: '_cart',
                           id: '4'
                         
                       },
                       {
                           name :{nom:'Ferrari', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Ferrari.jpg',
                           price: '$500',
                           cart: '_cart',
                           id:'5'

                       },
                       {
                           name: {nom:'Honda', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Honda.jpg',
                           price: '$50',
                           cart: '_cart',
                           id: '6'
                           
                       },
                       {
                           name: {nom:'Lamborghini', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/lamborghini.jpg',
                           price: '$520',
                           cart: '_cart',
                           id:'7'
                       },
                       {
                           name: {nom:'Rolls', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Rolls.jpg',
                           price: '$700',
                           cart: '_cart',
                           id: '8'
                       },
                       {
                           name: {nom:'Mercedes', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'250px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/mercedes.png',
                           price: '$150',
                           cart: '_cart',
                           id: '9'
                           
                       },
                       {
                           name: {nom:'Lincoln', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'200px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Lincoln.jpg',
                           price: '$120',
                           cart: '_cart',
                           id: '10'
                       },
                       {
                           name : { nom: 'Porsche',  minHeight: '150px', maxHeight: '150px', minWidth: '248px', maxWidth: '200px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/porsche.jpg',
                           price: '$100',
                           cart: '_cart',
                           id: '11'
                       },
                       {
                           name: {nom:'Nissan', minHeight:'150px', maxHeight:'150px',minWidth:'248px', maxWidth:'200px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/nissan.jpg',
                           price: '$50',
                           cart: '_cart',
                           id: '12'
                       }
                      ];

                       $scope.Change = function (nom, maxhg, price) {

                           //$scope.maxHeight = '300px';
                           maxhg = '300px';
                           alert(''+nom+ ' '+maxhg+ ' '+price);
                          
                                                  
                        }

                     })
                      .controller('PartnersController', function ($scope) {

                          $scope.partner = 'Partners Page';
                      })
                      .controller('AunctionController', function ($scope) {

                          $scope.aunction = 'Aunction Page';
                      })
                      .controller('TextController', function ($scope) {

                          $scope.text = 'Text Page';
                      })
                      .controller('InfoController', function ($scope) {

                          $scope.info = 'Info Page';

                      });

