'use strict';
app.directive('assets', (api)=> {
    return {
        restrict : 'E',
        scope: true,
        templateUrl : 'views/directives/assets.html',
        controller : function($scope){
            $scope.assets = api.DB();
            $scope.editing = false;

            $scope.save = function(item){
                if(!$scope.editing){
                    $scope.assets.$add(item);
                }else{
                    $scope.assets.$save($scope.asset);
                    $scope.asset = '';
                    $scope.assets = api.DB();
                    $scope.editing = false;
                }
            }

            $scope.edit = function(item){
                if(!$scope.editing){
                    $scope.editing = true;
                }
                $scope.asset = item;
            }

            $scope.delete = function(item){
                $scope.assets.$remove(item);
            }

            $scope.cancel = function(){
                $scope.asset = '';
                $scope.editing = false;
            }
        },
    }
});
