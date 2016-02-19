'use strict';
app.directive('assets', ['api', ()=> {
    console.log('asset build');
    return {
        restrict : 'E',
        scope: {
            data: '='
        },
        templateUrl : 'views/directives/assets.html'
    }
}]);