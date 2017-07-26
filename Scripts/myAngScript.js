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
                              .when('/Shopping', {
                                  templateUrl: 'Views/Shopping.html',
                                  controller:'ShoppingController'
                              })
                              .otherwise({

                                  //redirecto: '/Home'
                                  controller: 'HomeController',
                                  templateUrl: 'Views/Home.html'

                              })

                          $locationProvider.html5Mode(true);

                      });


var items = new Array();
var checkers = new Array();

myCarApp.controller('HomeController', function ($scope) {

    var obj = {};

    $scope.styl= { maxHeight:'', minWidth :'', maxWidth : '', minHeight:''}
    $scope.title = 'Cars';
    $scope.cars = [
                       {
                           name:{nom: 'Bentley', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Bentley.png',
                           price: '$300',
                           cart: '_cart',
                           id: '1'
                           
                          
                       },
                       {
                           name : { nom: 'Bugatti', minHeight: '150px', maxHeight: '150px', minWidth: '200px', maxWidth: '220px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/Bugatti.jpg',
                           price: '$450',
                           cart: '_cart',
                           id: '2'
                       },
                       {
                           name: { nom: 'Cadillac', minHeight: '150px', maxHeight: '150px', minWidth: '200px', maxWidth: '220px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/Cadillac.jpg',
                           price: '$130',
                           cart: '_cart',
                           id: '3'
                       },
                       {
                           name: { nom: 'B.M.W',  minHeight: '150px', maxHeight: '150px', minWidth: '200px', maxWidth: '220px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/bmw.jpg',
                           price: '$350',
                           cart: '_cart',
                           id: '4'
                         
                       },
                       {
                           name :{nom:'Ferrari', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Ferrari.jpg',
                           price: '$500',
                           cart: '_cart',
                           id: '5'

                       },
                       {
                           name: {nom:'Honda', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Honda.jpg',
                           price: '$50',
                           cart: '_cart',
                           id: '6'
                           
                       },
                       {
                           name: {nom:'Lamborghini', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/lamborghini.jpg',
                           price: '$520',
                           cart: '_cart',
                           id: '7'
                          
                       },
                       {
                           name: {nom:'Rolls', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Rolls.jpg',
                           price: '$700',
                           cart: '_cart',
                           id: '8'
                       },
                       {
                           name: {nom:'Mercedes', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/mercedes.png',
                           price: '$150',
                           cart: '_cart',
                           id: '9'
                       },
                       {
                           name: {nom:'Lincoln', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/Lincoln.jpg',
                           price: '$120',
                           cart: '_cart',
                           id: '10'
                       },
                       {
                           name : { nom: 'Porsche',  minHeight: '150px', maxHeight: '150px', minWidth: '200px', maxWidth: '220px', bstrap: 'col-lg-4 col-md-4 col-sm-4 col-xs-12'  },
                           image: '/Images/porsche.jpg',
                           price: '$100',
                           cart: '_cart',
                           id: '11'
                       },
                       {
                           name: {nom:'Nissan', minHeight:'150px', maxHeight:'150px',minWidth:'200px', maxWidth:'220px', bstrap:'col-lg-4 col-md-4 col-sm-4 col-xs-12'},
                           image: '/Images/nissan.jpg',
                           price: '$50',
                           cart: '_cart',
                           id: '12'
                       }
                    ];

                        var userAgent = 'phone is my none'; //+ navigator.userAgent;
               
                        // alert('' + userAgent);

                        var deviceFound = false;

                       // var deviceTypes = ['iphone','samsung','android','phone','Nexus','Mobile'];
                        
                       // for (device in deviceTypes) {

                            var dev = 'phone';

                            device = userAgent.search(dev);

                            //alert(''+ device);

                            if (device == '0') {

                                deviceFound = true;
                            }
                       // }
                        
                        
                        if (deviceFound == true) {
                             
                            var i = 0;

                            while (i < items.length) {

                                items[i].name.maxHeight = '50px';
                                items[i].name.minHeight = '50px';
                                items[i].name.maxWidth  = '130px';
                                items[i].name.minWWidth = '100px';

                               // alert(''+items[i].name.nom);

                                i++;
                            }
                        }

                        var length = parseInt($scope.cars.length);
                        $scope.green = new Array(length);

                        var i = 0;
                        while (i <= length) {

                            $scope.green[i] = false;
                            i++;
                        }
                     
                       var myNameList = new Array();
                       var myIdList = new Array();
                       $scope.nameList = new Array();
                        

                       $scope.addId = function(id, name) {
                          
                            myNameList[id] = name;

                           var a = 0;

                           while (a <= length) {

                               //&& name == $scope.cars[a].name.nom id === a 
                               if (name == $scope.cars[a].name.nom) {

                                   $scope.nameList.push($scope.cars[a]);
                                   items.push($scope.cars[a]);

                                   break;
                               }
                               a++;

                           }
                         
                       }
                       
                                      
                       $scope.details = function (id, name) {

                           alert(id + ' ' + name);
                       }

                       $scope.Change = function (maxhg,id) {

                           var index = 0;
                           var current = 0;
                           var myId = parseInt(id);

                           do {
                               
                               if ($scope.cars[index].id == id) {

                                   if ('150px' == maxhg) {

                                       $scope.cars[index].name.maxHeight = '250px';
                                       $scope.cars[index].name.maxWidth = '250px';
                                       $scope.green[index+1] = true;

                                       var indice = 0;
                                       
                                       while (indice < length) {

                                           if (indice != index) {
                                                
                                               $scope.cars[indice].name.maxHeight = '150px';
                                               $scope.cars[indice].name.maxWidth = '220px';
                                               $scope.green[indice+1] = false;
                                           }
                                           indice++;
                                       }
                                       index = 0;
                                       break;
                                   }
                                   else {

                                       $scope.cars[index].name.maxHeight = '150px';
                                       $scope.cars[index].name.maxWidth = '220px';
                                       $scope.green[index + 1] = false;
                                      // alert('Else' + maxhg + ' changed to 150px');
                                       index = 0;
                                       break;
                                   }

                               }
                               else {

                                   $scope.cars[index].name.maxHeight = '150px';
                                   $scope.cars[index].name.maxWidth = '220px';
                                   index++
                                   //alert('Else out' + maxhg);
                                   
                                   
                               }

                               //alert($scope.cars[index].id + ' <= ' + id);

                               current = parseInt($scope.cars[index].id);

                           } while (current <= myId);
                           // while ($scope.cars[index].id <= id);
                          
                           
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

                      })
                      .controller('ShoppingController', function ($scope) {

                          try {

                              if (items.length == 0) {

                                  $scope.shopping = 'cart is empty';
                              }
                              else {
                                  $scope.shopping = 'Shopping cart';
                              }

                              var countId = new Array();

                              $scope.myNumbers = new Array();

                              var position = new Array();

                              $scope.myItems = new Array();

                              var selectedItems = new Array();

                              var copyItems = new Array();

                              var i = 0;

                              while (i < items.length) {

                                  copyItems.push(items[i]);

                                  i++;
                              }

                              var j = 0, k = 0, option = false, prenom = "";

                              while (j < items.length) {

                                  k = 0;

                                  while (k < copyItems.length) {

                                      if (items[j].id == copyItems[k].id) {

                                          var li = 0;

                                          while (li < selectedItems.length) {

                                              if (items[j].id == selectedItems[li].id) {

                                                  option = true;

                                                  prenom = selectedItems[li].name.nom;

                                                  //alert(prenom + ' Exist');

                                                  break;
                                              }

                                              li++;

                                          }

                                          if (option == false) {

                                              selectedItems.push(copyItems[j]);

                                          }

                                      }
                                      k++;
                                  }

                                  option = false;

                                  j++;
                              }

                              var s = 0, t = 0;

                              while (s < selectedItems.length) {

                                  //position
                                  position.push(s);

                                  countId.push(0);

                                  while (t < items.length) {

                                      if (selectedItems[s] == items[t]) {

                                          countId[s] += 1;
                                      }

                                      t++;
                                  }

                                  t = 0;

                                  s++;
                              }

                              
                              var countOut = new Array();
                               
                              var co = 0;

                              while (co < selectedItems.length) {

                                  countOut.push({ pos: '', val: '' });
                                  co++;
                              }

                              //Populating countOut.
                              var idx = 0;

                              while (idx < selectedItems.length) {

                                  countOut[idx].pos = selectedItems[idx].id;

                                  countOut[idx].val = '' + countId[idx];

                                  alert('' + countOut[idx].pos);

                                  idx++;
                              }

                              

                              //var removed = new Array();

                              //removed = countOut.splice(selectedItems.length, (countOunt.length - selectedItems.length));

                              $scope.clear = function () {

                                  //alert('selected '+ selectedItems.length);

                                  $scope.myItems.length = 0;

                                  selectedItems.length = 0;

                                  countOut.length = 0;

                                  countId.length = 0;

                                  items.length = 0;

                                  $scope.shopping = 'Empty car';

                              }

                              $scope.addOne = function (posAdded) {

                                  var i = 0;

                                  while (i < $scope.myNumbers.length) {

                                      if ($scope.myNumbers[i].pos == posAdded) {

                                          $scope.myNumbers[i].val = parseInt($scope.myNumbers[i].val) + 1 + '';

                                          alert('' + $scope.myNumbers[i].val);

                                          break;
                                      }
                                      i++;
                                  }

                              }

                              $scope.removeOne = function (posRemove) {

                                  var i = 0;

                                  while (i < $scope.myNumbers.length) {

                                      if ($scope.myNumbers[i].pos == posRemove) {

                                          if ($scope.myNumbers[i].val > 1) {

                                              $scope.myNumbers[i].val = $scope.myNumbers[i].val - 1;

                                          }
                                          else {

                                              $scope.myNumbers.splice(i, 1);

                                              $scope.myItems.splice(i, 1);
                                          }

                                          break;
                                      }
                                     
                                      i++;
                                  }

                              }

                             
                              $scope.myNumbers = countOut;

                              $scope.myItems = selectedItems;
                            
                          } catch (error) {

                              alert('this is an error : ' + error);
                          }
                          finally {

                              if ($scope.shopping != 'Shopping cart' || $scope.myItems.length == 0) {

                                  $scope.shopping = 'Empty cart';
                              }

                          }
                          

                      });

