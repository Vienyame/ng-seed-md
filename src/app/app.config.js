(function() {
  'use strict';

  angular
    .module('myApp')
    .config(appConfig);

  /** @ngInject */
  function appConfig($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib

  }

})();
