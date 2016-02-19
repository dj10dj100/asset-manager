'use strict';
app.directive('asset', ()=> {
    console.log('asset build');
    return {
        restrict : 'E',
        templateUrl : 'views/directives/asset.html'
    }
});