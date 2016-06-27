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

  /** @ngInject */
  function MainController($timeout, toastr) {
    var vm = this;

    vm.hello = 'Hello World!';
    vm.feeling = '';
    vm.creationDate = 1466960844950;
    vm.showToastr = showToastr;

    activate();

    function activate() {
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Vienyame/ng-seed-md" target="_blank"><b>ng-seed-md</b></a>');
      vm.classAnimation = '';
    }

  }

})();
