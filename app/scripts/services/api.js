'use strict';
app.service('api', ($http, Backand)=> {

    var get = function(objects){

        return $http({
            method: 'GET',
            url: Backand.getApiUrl() + '/1/objects/' + name,
            params: {
              pageSize: 20,
              pageNumber: 1
            }
        });
    };

    var put = function(endpoint, data){

    };

    return {
        get : get,
        put : put
    }
});