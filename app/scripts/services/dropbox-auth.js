'use strict';

/**
 * @ngdoc service
 * @name easyFavesApp.dropboxAuth
 * @description
 * # dropboxAuth
 * Factory in the easyFavesApp.
 */
angular.module('easyFavesApp')
  .factory('dropboxAuth', function () {
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
