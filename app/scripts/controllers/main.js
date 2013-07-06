'use strict';

angular.module('ghanozBookWishListAngularApp')
  .controller('MainCtrl', function($scope) {
    $scope.heading = "Ghanoz's book wish list on AngularJS";
    $scope.books = [
      '97 Things Every Programmer Should Know',
      'NoSQL Distilled A Brief Guide to the Emerging World of Polyglot' +
        ' Persistence',
      'The Agile Samurai',
      'JavaScript Patterns',
      'JavaScript The Definitive Guide, 6th Edition',
      'Learning Node',
      'Maintainable JavaScript',
      'Node.js in Action',
      'Node Up and Running',
      'Node Cookbook'
    ];
  });