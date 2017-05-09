'use strict';

/**
 * @ngdoc service
 * @name udaciMealsApp.foodFinder
 * @description
 * # foodFinder
 * Service in the udaciMealsApp.
 */
angular.module('udaciMealsApp')
  .service('foodFinder', function () {
    // AngularJS will instantiate a singleton by calling "new" on this function

    /*
     * JSON only loads on Firefox Developer Edition
     * because of potential security breaches. This statement
     * doesn't seems to be the bug.
     * http://stackoverflow.com/questions/18637418/trying-to-load-local-json-file-to-show-data-in-a-html-page-using-jquery
     *
     * The JSON file doesn't load everytime on Firefox.
     * I saw that the data loads when you click the home
     * button.
     *
     * Check this for a possible solution:
     * https://discussions.udacity.com/t/update-view-when-json-has-been-loaded/199950/4?u=rbelow
     */
    this.getMenu = function() {
        return $.get('menu/menu.json');
    };

    this.getItem = function(id) {
        var menuItemFile = '/menu/' + id + '.json';
        return $.get(menuItemFile);
    };
  });
