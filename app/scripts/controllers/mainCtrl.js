'use strict';

app.controller('mainCtrl', ['$scope',($scope) => {
$scope.assets = [
    {
        id : '22',
        assetNumber : '1231asdasd0',
        title: 'Macbook Pro',
        status : false, //true booked, false available
        location : 'store room 1',
        assignedTo : 'daniel jenkins',
        description : 'lorum ipsum dolor sit amet. yeah.'
    },
    {
        id : '17',
        assetNumber : '12312bsd',
        title :'iPhone 5',
        status : false, //true booked, false available
        location : 'store room 2',
        assignedTo : 'daniel jenkins',
        description : 'lorum ipsum dolor sit amet. yeah.'
    },
    {
        id : '1',
        assetNumber : '1123123sad',
        title: 'iPhone 6 plus',
        status : false, //true booked, false available
        location : 'store room 1',
        assignedTo : 'daniel jenkins',
        description : 'lorum ipsum dolor sit amet. yeah.'
    },
    {
        id : '12',
        assetNumber : 'ascacas23123',
        title: 'iPhone 7',
        status : false, //true booked, false available
        location : 'store room 2',
        assignedTo : 'daniel jenkins',
        description : 'lorum ipsum dolor sit amet. yeah.'
    },
]
}]);