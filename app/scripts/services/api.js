'use strict';
app.service('api', ($firebaseArray) => {

    var DB = ()=> {
        var DB = new Firebase('https://asset-manager-365.firebaseio.com/assets');
        return $firebaseArray(DB);
    };

    return {
        DB : DB
    }
});
