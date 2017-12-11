
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','education.controller'])

  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        cordova.plugins.Keyboard.disableScroll(true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault();
      }
    });
  })

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })
      .state('app.browse', {
        url: '/browse',
        views: {
          'menuContent': {
            templateUrl: 'templates/browse.html'
          }
        }
      })


      // .state('app.single', {
      //   url: '/playlists/:playlistId',
      //   views: {
      //     'menuContent': {
      //       templateUrl: 'templates/playlist.html',
      //       controller: 'PlaylistCtrl'
      //     }
      //   }
      // })

      .state('app.newshome', {
        url: '/newshome',
        views: {
          'menuContent': {
            templateUrl: 'templates/newshome.html',
            controller: 'newshomeCtrl'
          }
        }
      })

      .state('app.newsdetail', {
        url: '/newsdetail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/newsdetail.html',
            controller:'newshomeCtrl'
          }
        }
      })

      .state('app.newshappy', {
        url: '/newshappy',
        views: {
          'menuContent': {
            templateUrl: 'templates/newshappy.html',
            controller: 'newshappyCtrl'
          }
        }
      })


      //job路由
      .state('app.market', {
        url: '/market',
        views: {
          'menuContent': {
            templateUrl: 'templates/market.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })
      .state('app.infoList', {
        url: '/infoList',
        views: {
          'menuContent': {
            templateUrl: 'templates/infoList.html',
            controller: 'AppCtrl'
          }
        }
      })
      .state('app.detail', {
        url: '/detail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/detail.html',
            controller: 'PlaylistsCtrl'
          }
        }
      })


      /***************** 跳蚤市场 *****************/
      //跳蚤 首页
      .state('app.playlists', {
        url: '/playlists',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-home.html',
            controller: 'tzPlaylistsCtrl'
          }
        }
      })
      .state('app.list', {
        url: '/list',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/lists.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.phone', {
        url: '/phone',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-phone.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.computer', {
        url: '/computer',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-computer.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.books', {
        url: '/books',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-books.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.bike', {
        url: '/bike',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-bike.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.game', {
        url: '/game',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-game.html',
            controller: 'tzlistCtrl'
          }
        }
      })
      .state('app.clothes', {
        url: '/clothes',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-clothes.html',
            controller: 'tzlistCtrl'
          }
        }
      })

      .state('app.issue', {
        url: '/issue',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-issue.html',
            controller: 'issueCtrl'
          }
        }
      })

      .state('app.tzdetail', {
        url: '/tzdetail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/tz-xq1.html',
            controller: 'tzdetailCtrl'
          }
        }
      })

      .state('app.searchlist', {
        url: '/searchlist',
        views: {
          'menuContent': {
            templateUrl: 'templates/fleaMarket/search-list.html',
            controller: 'searchlistCtrl'
          }
        }
      })
      .state('app.education', {
        url: '/education',
        views: {
          'menuContent': {
            templateUrl: 'templates/education.html',
            controller: 'EducationCtrl'
          }
        }
      })
      .state('app.jydetail', {
        url: '/jydetail/:productId',
        views: {
          'menuContent': {
            templateUrl: 'templates/jy-detail.html',
            controller: 'DetailCtrl'
          }
        }
      })
      .state('app.extremity', {
        url: '/extremity/:productId',
        views: {
          'menuContent': {
            templateUrl: 'templates/extremity.html',
            controller: 'ExtremityCtrl'
          }
        }
      });
    /******************************************/

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/playlists');
  });
