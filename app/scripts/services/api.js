'use strict';
app.service('api', ($firebaseObject)=> {

    var DB = ()=> {
        var DB = new Firebase('https://blinding-fire-7636.firebaseio.com/');
        return $firebaseObject(DB);
    };

    return {
        DB : DB
    }
});
