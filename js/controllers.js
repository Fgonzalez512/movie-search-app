app.controller('myController', ['$scope', '$http', function($scope, $http) {

    $scope.view = {};
    $scope.view.submit = function(search) {
        $http({
            method: 'GET',
            url: 'http://www.omdbapi.com/?s=' + search
        }).then(function successCallback(response) {
            console.log(response.data.Search);
            $scope.view.results = response.data.Search;
        });
    }

}]);

app.controller('myController2', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

    $scope.view = {};
    let movie = $routeParams.movieID;

    $http({
        method: 'GET',
        url: 'http://www.omdbapi.com/?i=' + movie
    }).then(function successCallback(response) {
        console.log(response.data);
        $scope.view.results = response.data;
    });
}])
