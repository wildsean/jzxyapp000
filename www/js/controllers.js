// angular.module('starter.controllers', [])
//
// .controller('AppCtrl', function($scope, $ionicModal, $timeout) {
//
//   // With the new view caching in Ionic, Controllers are only called
//   // when they are recreated or on app start, instead of every page change.
//   // To listen for when this page is active (for example, to refresh data),
//   // listen for the $ionicView.enter event:
//   //$scope.$on('$ionicView.enter', function(e) {
//   //});
//
//   // Form data for the login modal
//   $scope.loginData = {};
//
//   // Create the login modal that we will use later
//   $ionicModal.fromTemplateUrl('templates/login.html', {
//     scope: $scope
//   }).then(function(modal) {
//     $scope.modal = modal;
//   });
//
//   // Triggered in the login modal to close it
//   $scope.closeLogin = function() {
//     $scope.modal.hide();
//   };
//
//   // Open the login modal
//   $scope.login = function() {
//     $scope.modal.show();
//   };
//
//   // Perform the login action when the user submits the login form
//   $scope.doLogin = function() {
//     console.log('Doing login', $scope.loginData);
//
//     // Simulate a login delay. Remove this and replace with your login
//     // code if using a login system
//     $timeout(function() {
//       $scope.closeLogin();
//     }, 1000);
//   };
// })
//
// .controller('PlaylistsCtrl', function($scope) {
//   $scope.playlists = [
//     { title: 'Reggae', id: 1 },
//     { title: 'Chill', id: 2 },
//     { title: 'Dubstep', id: 3 },
//     { title: 'Indie', id: 4 },
//     { title: 'Rap', id: 5 },
//     { title: 'Cowbell', id: 6 }
//   ];
// })
//
// .controller('PlaylistCtrl', function($scope, $stateParams) {
// })
//
// .controller('newshomeCtrl', function($scope, $stateParams) {
//
//   $scope.newslists = [
//     { title: '奔跑吧青年', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//     { title: '奔跑吧青年', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//     { title: '奔跑吧青年', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//     { title: '奔跑吧青年', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
//   ];
//   $scope.newsitem = $scope.newslists[$stateParams.id-1];
//   console.log($scope.newsitem);
// })
//
//   // .controller('newsdetailCtrl', function($scope, $stateParams) {
//   //   // $scope.newsitem = [
//   //   //   { title: '奔跑吧青年1', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//   //   //   { title: '奔跑吧青年2', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//   //   //   { title: '奔跑吧青年3', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//   //   //   { title: '奔跑吧青年4', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
//   //   // ];
//   //   $scope.newsitem = [
//   //    { title: "1111", id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
//   //
//   //    ];
//   //   $scope.ids = $stateParams.id;
//   //   console.log($scope.ids);
//   //
//   // })
//   .controller('newshappyCtrl', function($scope, $stateParams) {
//     $scope.newshappydata = [
//       { title: '奔跑吧青年', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//       { title: '奔跑吧青年', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//       { title: '奔跑吧青年', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//       { title: '奔跑吧青年', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//       { title: '奔跑吧青年', id: 5 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
//       { title: '奔跑吧青年', id: 6 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
//     ];
//   });
//
