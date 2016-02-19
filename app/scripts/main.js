var app = angular.module("assetMgr", ['backand'])
    .config(function (BackandProvider) {
        BackandProvider.setAppName('assetmanager');
        BackandProvider.setSignUpToken('6c503f6d-af70-4512-b7b9-305bb606a337');
        BackandProvider.setAnonymousToken('b443f403-5bfe-4d41-99d2-5a40d680829d');
    })


