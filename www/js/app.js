// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ui.router'])

        .run(function ($ionicPlatform) {
            $ionicPlatform.ready(function () {
                // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                // for form inputs)
                if (window.cordova && window.cordova.plugins.Keyboard) {
                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                }
                if (window.StatusBar) {
                    // org.apache.cordova.statusbar required
                    StatusBar.styleDefault();
                }
            });
        })

        .config(function ($stateProvider, $urlRouterProvider) {
            $stateProvider

                    .state('splash', {
                        url: '/splash',
                        templateUrl: 'templates/splash.html',
                        controller: 'SplashCtrl'
                    })

                    .state('app', {
                        url: "/app",
                        abstract: true,
                        templateUrl: "templates/menu.html",
                        controller: 'AppCtrl'
                    })

                    .state('app.allschools', {
                        url: "/allschools",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/allschools.html",
                                controller: 'SubscribedSchoolsCtrl'
                            }
                        }
                    })

                    .state('app.studentprofiles', {
                        url: "/studentprofiles",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/studentprofiles.html",
                                controller: 'StudentProfilesCtrl'
                            }
                        }
                    })
                    .state('app.dashboard', {
                        url: "/dashboard",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/dashboard.html",
                                controller: 'DashboardCtrl'
                            }
                        }
                    })

                    .state('app.payschoolfees', {
                        url: "/payschoolfees",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/payschoolfees.html",
                                controller: 'PaySchoolFeesCtrl'
                            }
                        }
                    })
                    
                    .state('app.completepayment', {
                        url: "/completepayment",
                        views: {
                            'menuContent': {
                                templateUrl: "templates/completepayment.html",
                                controller: 'CompletePaymentCtrl'
                            }
                        }
                    });
            // if none of the above states are matched, use this as the fallback
            $urlRouterProvider.otherwise('/app/dashboard');
        })

        .constant('SERVER', {
            // mFees Online Server
            url: 'http://mvend.co.rw/schoolfees/api'

            // mFees Local Server
            //url: 'http://localhost:7378/MVendLab/schoolfees/api'
        });

