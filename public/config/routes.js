/*
Create Angular config in app.config module
*/
((app) => {
    'use strict'
    app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
        // Define prefix
        $locationProvider.hashPrefix('!')
        // For each url not found redirection to '/'
        $urlRouterProvider.otherwise('/')
        /*
          Define a state with name 'app' this state is abstract and url is empty (root of application)
          template is ui-view it's used to display nested views
        */
        $stateProvider.state('app', {
            url: '',
            abstract: true,
            template: '<ui-view></ui-view>'
        })
    }])
})(require('angular').module('app.config'))
