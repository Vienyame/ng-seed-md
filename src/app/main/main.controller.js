(function() {
  'use strict';

  angular.module('myApp')
    .controller('MainController', MainController);


  /**
   * @ngdoc controller
   * @name myApp.controller:MainController
   * @description
   * ng-seed main controller
   * @example
   */
  function MainController() {
    var vm = this;

    vm.hello = 'Hello World!';
    vm.feeling = '';

  }

  MainController.$inject = [];
})();
