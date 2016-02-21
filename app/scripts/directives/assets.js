'use strict';
app.directive('assets', ['api', (api)=> {
    console.log('asset build');
    return {
        restrict : 'E',
        scope: {
            data: '='
        },
        templateUrl : 'views/directives/assets.html',
        controller : function($scope){
            $scope.db = api.DB();
            console.log($scope.db);
        },
    }
}]);
