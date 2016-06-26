(function() {
  'use strict';

  describe('controllers', function () {
    var vm;

    beforeEach(module('myApp'));
    beforeEach(inject(function(_$controller_) {

      vm = _$controller_('MainController');

    }));

    it('should display Hello World', function(){
      expect(vm.hello).toEqual('Hello World!');
    });

  });
})();
