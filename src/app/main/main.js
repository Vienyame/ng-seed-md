(function(){
  'use strict';

  angular.module('myApp')
  .config(mainConfig);

  /** @ngInject */
  function mainConfig($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller:'MainController',
        controllerAs:'main'
      });
  }

})();
