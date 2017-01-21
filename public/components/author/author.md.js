((app) => {

  'use strict'
  app.config(['$stateProvider', ($stateProvider, $urlRouterProvider, $locationProvider) => {
      $stateProvider.state('app.author', {
          url: '/',
          template: '<author></author>'
      })
  }])

})(require('angular').module('app.author',[]))
