var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html',
            controller: 'myController'
        })

    .when('/:movieID', {
        templateUrl: 'partials/searchresults.html',
        controller: 'myController2'
    })
});
