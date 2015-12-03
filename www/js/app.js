angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
   $stateProvider
   .state('signin', {
     url: '/signin',
     templateUrl: 'templates/signin.html',
     controller: 'SignInCtrl',
   })
   .state('register', {
     url: '/register',
     templateUrl: 'templates/register.html',
     controller: 'RegistCtrl',
   })
   .state('lists', {
     url: '/lists',
     templateUrl: 'templates/lists.html',
     controller: 'ListsCtrl',
   })
   .state('newlist', {
     url: '/lists/new',
     templateUrl: 'templates/newList.html',
     controller: 'NewListCtrl',
   })
   .state('list', {
     url: '/lists/:title',
     templateUrl: 'templates/list.html',
     controller: 'ListCtrl',
   });
   $urlRouterProvider.otherwise('/signin');
})
