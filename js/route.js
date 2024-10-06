// Định nghĩa một module AngularJS mới và cấu hình routing
var app = angular.module('myApp',["ngRoute"])
   app.config(function($routeProvider) {
        $routeProvider
            .when('/login', {
                templateUrl: './layout/login.html',
                controller: 'loginCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });
