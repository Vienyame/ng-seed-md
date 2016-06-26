(function(){
  'use strict';

  angular.module('myApp')
  .config(mainConfig);

  function mainConfig($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller:'MainController',
        controllerAs:'main'
      });
  }

  mainConfig.$inject = ['$stateProvider'];
})();
