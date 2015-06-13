'use strict';

/**
 * @ngdoc service
 * @name easyFavesApp.itemMirror
 * @description
 * # itemMirror
 * Factory in the easyFavesApp.
 */
angular.module('easyFavesApp')
  .factory('itemMirror', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
