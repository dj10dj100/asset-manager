'use strict';
app.directive('assets', ()=> {
    console.log('asset build');
    return {
        restrict : 'E',
        scope: {
            data: '='
        },
        templateUrl : 'views/directives/assets.html'
    }
});