/*
 * @Author: iceStone
 * @Date:   2016-01-24 16:05:28
 * @Last Modified by:   iceStone
 * @Last Modified time: 2016-01-24 17:26:36
 */

(function(window) {
  'use strict';

  /**
   * todomvc Module
   */
  var app = angular.module('TodoApp', []);

  app.controller('TodoController', ['$scope', '$location', function($scope, $location) {
    // todos models
    $scope.todos = [{
      text: 'Bower',
      completed: true,
      editing: false
    }, {
      text: 'Node',
      completed: false,
      editing: false
    }, {
      text: 'Google',
      completed: false,
      editing: false
    }, ];

    // add function
    $scope.text = '';
    $scope.add = function() {
      $scope.todos.push({
        text: $scope.text,
        completed: false,
        editing: false
      });
      $scope.text = '';
    };

    // remove function
    $scope.remove = function(index) {
      $scope.todos.splice(index, 1);
    };

    // clear all completed
    $scope.clearCompleted = function() {
      var noCompleteds = [];
      for (var i = 0; i < $scope.todos.length; i++) {
        if (!$scope.todos[i].completed) {
          noCompleteds.push($scope.todos[i]);
        }
      }
      $scope.todos = noCompleteds;
    };

    // filter
    $scope.filter = {};
    var path = $location.path();
    switch (path) {
      case '/active':
        $scope.filter.completed = false;
        break;
      case '/completed':
        $scope.filter.completed = true;
        break;
    }

    // editing
    $scope.edit = function(todo) {
      for (var i = 0; i < $scope.todos.length; i++) {
        $scope.todos[i].editing = false;
      }
      todo.editing = true;
    }
    $scope.save = function(todo) {
      todo.editing = false;
    }

    // completed all
    // $scope.toggle = false;
    $scope.allCompleted = function() {
      for (var i = 0; i < $scope.todos.length; i++) {
        $scope.todos[i].completed = $scope.toggle;
      }
    };
  }]);

})(window);
