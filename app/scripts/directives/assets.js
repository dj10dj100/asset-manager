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
            api.get('assets').then((data) => {
                console.log(data);
            })

        },
    }
}]);