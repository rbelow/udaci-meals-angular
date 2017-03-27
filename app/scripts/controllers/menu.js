'use strict';

/**
 * @ngdoc function
 * @name udaciMealsApp.controller:MenuCtrl
 * @description
 * # MenuCtrl
 * Controller of the udaciMealsApp
 */
angular.module('udaciMealsApp')
  .controller('MenuCtrl', function () {
    this.items = [
        {
            id: 'chicken-pomegranate-salad',
            name: 'Chicken Pomegranate Salad',
            img: 'chicken-pomegranate-salad.jpg',
            calories: 430,
            rating: 4.6
        },
        {
            id: 'strawberry-pudding',
            name: 'Strawberry Pudding',
            img: 'strawberry-pudding.jpg',
            calories: 327,
            rating: 4.3
        },
        {
            id: 'ham-goat-cheese-croissant',
            name: 'Ham Goat Cheese Croissant',
            img: 'ham-goat-cheese-croissant.jpg',
            calories: 1340,
            rating: 3.9
        },
    ];

    this.increment = function(item) {
        // item.rating += 0.1;
        item.rating = ((item.rating * 10) + 1 ) / 10;
    };
    this.decrement = function(item) {
        // item.rating -= 0.1;
        item.rating = ((item.rating * 10) - 1 ) / 10;
    };

  });
