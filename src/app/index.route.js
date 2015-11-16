(function() {
  'use strict';

  angular
    .module('appSme')
    .config(routeConfig);

  /** @ngInject */
  function routeConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('base', {
        abstract: true,
        templateUrl: 'app/base/base.html',
        data: {
          requireLogin: true,
        }
      })
      .state('home', {
        url: '/',
        templateUrl: 'app/home/home.html',
        controller: 'HomeController',
        controllerAs: 'home',
        data: {
          requireLogin: false
        }
      })
      .state('logout',{
        controller: 'LogoutController',
        data:{
          requireLogin: false
        }
      })
      .state('dashboard',{
        parent: 'base',
        url: '/dashboard',
        templateUrl: 'app/dashboard/dashboard.html',
      })
      .state('stats', {
        parent: 'base',
        url: '/stats',
        templateUrl: 'app/stats/stats.html',
        controller: 'StatsController',
        controllerAs: 'stats'
      })

      // .state('info',{
      //   url: '/info',
      //   // abstract: true,
      //   parent: 'base',
      // })
      .state('infoPersonal',{
        parent: 'base',
        url:'/info/personal',
        templateUrl: 'app/info/layout.html',
        controller: 'InfoPersonalController',
        controllerAs: 'vm'
      })
        .state('encuesta',{
          parent:'base',
          url:'/encuesta',
          templateUrl:'app/encuesta/encuesta.html',
          controller: 'EncuestaController',
          controllerAs: 'encuesta',
        })
    ;



    $urlRouterProvider.otherwise('/');
  }

})();
