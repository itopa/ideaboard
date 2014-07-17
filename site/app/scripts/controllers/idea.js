'use strict';

/**
 * @ngdoc function
 * @name siteApp.controller:IdeaCtrl
 * @description
 * # IdeaCtrl
 * Controller of the siteApp
 */
angular.module('siteApp')
  .controller('IdeaCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
