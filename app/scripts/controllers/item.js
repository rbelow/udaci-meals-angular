'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:ItemCtrl
 * @description
 * # ItemCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('ItemCtrl', ['$stateParams', 'foodFinder', function ($stateParams, foodFinder) {
      // viewmodel local scope
      var vm = this;

      foodFinder.getItem($stateParams.id).then(function(data) {
          vm.data = data;
      });
  }]);
