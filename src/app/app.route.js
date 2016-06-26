(function() {
  'use strict';

  angular.module('myApp')
    .config(routerConfig);


  function routerConfig($urlRouterProvider) {
    $urlRouterProvider.otherwise('/');
  }
  routerConfig.$inject = ['$urlRouterProvider'];
})();
