angular.module('starter.controllers', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout,$location) {

    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    // Form data for the login modal
    $scope.loginData = {};

    // Create the login modal that we will use later
    $ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      $scope.modal = modal;
    });

    // Triggered in the login modal to close it
    $scope.closeLogin = function() {
      $scope.modal.hide();
    };

    // Open the login modal
    $scope.login = function() {
      $scope.modal.show();
    };

    // Perform the login action when the user submits the login form
    $scope.doLogin = function() {
      console.log('Doing login', $scope.loginData);

      // Simulate a login delay. Remove this and replace with your login
      // code if using a login system
      $timeout(function() {
        $scope.closeLogin();
      }, 1000);
    };
    $scope.searchs = function () {
      $location.path('/app/infoList');
    };
    $scope.infolist=[
      {h3:'服务员专场面试会',id:1,img1:'./img/info01.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:2,img1:'./img/info02.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:3,img1:'./img/info03.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:4,img1:'./img/info04.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:1,img1:'./img/info01.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:2,img1:'./img/info02.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:3,img1:'./img/info03.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:4,img1:'./img/info04.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'}
    ];
  })

  .controller('PlaylistsCtrl', function($scope,$location,$stateParams) {
    // $scope.detail = function () {
    //   $location.path('/app/detail/{{}}');
    // };
    $scope.infolist=[
      {h3:'服务员专场面试会',id:1,img1:'./img/info01.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:2,img1:'./img/info02.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:3,img1:'./img/info03.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'},
      {h3:'服务员专场面试会',id:4,img1:'./img/info04.jpg',img2:'./img/biao.png',img3:'./img/dibiao.png',time:'面试时间10月8日10:00-16:00',address:'面试地点石景山总工会2层博看文思',money:'￥ 200',day:'/天'}
    ];
    $scope.lists = $scope.infolist[$stateParams.id-1];
    console.log($scope.lists );
  })


.controller('PlaylistCtrl', function($scope, $stateParams) {
  })

  .controller('newshomeCtrl', function($scope, $stateParams) {

    $scope.newslists = [
      { title: '奔跑吧青年', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
    ];
    $scope.newsitem = $scope.newslists[$stateParams.id-1];
    console.log($scope.newsitem);
  })

  // .controller('newsdetailCtrl', function($scope, $stateParams) {
  //   // $scope.newsitem = [
  //   //   { title: '奔跑吧青年1', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
  //   //   { title: '奔跑吧青年2', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
  //   //   { title: '奔跑吧青年3', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
  //   //   { title: '奔跑吧青年4', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
  //   // ];
  //   $scope.newsitem = [
  //    { title: "1111", id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
  //
  //    ];
  //   $scope.ids = $stateParams.id;
  //   console.log($scope.ids);
  //
  // })
  .controller('newshappyCtrl', function($scope, $stateParams) {
    $scope.newshappydata = [
      { title: '奔跑吧青年', id: 1 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 2 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 3 ,img:'./img/new-list3.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 4 ,img:'./img/new-list4.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 5 ,img:'./img/new-list1.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'},
      { title: '奔跑吧青年', id: 6 ,img:'./img/new-list2.jpg',ps:'当你还在纠结要不要做设计，当你还在苦恼为什么自己怀才不遇，当你还在不曾思考我改做什么....'}
    ];
  })


  .controller('tzPlaylistsCtrl',['$scope','$location','$stateParams','$state', function($scope,$location,$stateParams,$state) {
    $scope.title = '跳骚市场';
    $scope.datas = [
      { id:1,img:'../img/tz-c1.jpg',name:'时尚工艺品' ,prinf:'100',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:2,img:'../img/tz-c2.jpg',name:'ipad 九成新' ,prinf:'2000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:3,img:'../img/tz-c3.jpg',name:'时尚工艺品' ,prinf:'1500',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:4,img:'../img/tz-c4.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:5,img:'../img/tz-c5.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:6,img:'../img/tz-c6.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:7,img:'../img/tz-c7.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:8,img:'../img/tz-c2.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'}
    ];

    $scope.detail = $scope.datas[$stateParams.id-1];
    console.log($scope.detail);

    $scope.go = function () {
      $location.path('/app/searchlist');
    };

    $scope.go1 = function () {
      $location.path('/app/list');
    };

  }])

  .controller('tzPlaylistCtrl',['$scope','$location', function($scope,$location) {
    $scope.datas = [
      { id:1,img:'../img/tz-c1.jpg',name:'时尚工艺品' ,prinf:'100',peo:'../img/tz-peo1.jpg'},
      { id:2,img:'../img/tz-c2.jpg',name:'ipad 九成新' ,prinf:'2000',peo:'../img/tz-peo2.jpg'},
      { id:3,img:'../img/tz-c3.jpg',name:'时尚工艺品' ,prinf:'1500',peo:'../img/tz-peo1.jpg'},
      { id:4,img:'../img/tz-c4.jpg',name:'ipad 九成新',prinf:'1000',peo:'../img/tz-peo2.jpg'}
    ];

    $scope.xq = function () {
      $location.path('/app/issue');
    }

    $scope.go3 = function () {
      $location.path('/app/detail');
    };

  }])

  .controller('tzlistCtrl',['$scope', function($scope) {
    $scope.datas = [
      { id:1,img:'../img/tz-c1.jpg',name:'时尚工艺品' ,prinf:'100',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:2,img:'../img/tz-c2.jpg',name:'ipad 九成新' ,prinf:'2000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:3,img:'../img/tz-c3.jpg',name:'时尚工艺品' ,prinf:'1500',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:4,img:'../img/tz-c4.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:5,img:'../img/tz-c5.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:6,img:'../img/tz-c6.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:7,img:'../img/tz-c7.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:8,img:'../img/tz-c2.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'}
    ];

  }])

  .controller('issueCtrl',['$scope','$location', function($scope,$location) {

  }])

  .controller('searchlistCtrl',['$scope', function($scope) {

    $scope.bold = "bold";
    $scope.title = 'name';
    $scope.desc = 0;

    $scope.datas = [
      { id:1,img:'../img/tz-c1.jpg',name:'时尚工艺品' ,prinf:'100',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:2,img:'../img/tz-c2.jpg',name:'ipad 九成新' ,prinf:'2000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:3,img:'../img/tz-c3.jpg',name:'时尚工艺品' ,prinf:'1500',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:4,img:'../img/tz-c4.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前','num':'125'},
      { id:5,img:'../img/tz-c5.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:6,img:'../img/tz-c6.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:7,img:'../img/tz-c7.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前','num':'125'},
      { id:8,img:'../img/tz-c2.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'}
    ];

    $scope.key = '';

  }])

  .controller('tzdetailCtrl',['$scope','$stateParams', function($scope,$stateParams) {
    $scope.datas = [
      { id:1,img:'../img/tz-c1.jpg',name:'时尚工艺品' ,prinf:'100',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:2,img:'../img/tz-c2.jpg',name:'ipad 九成新' ,prinf:'2000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:3,img:'../img/tz-c3.jpg',name:'时尚工艺品' ,prinf:'1500',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:4,img:'../img/tz-c4.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前','num':'125'},
      { id:5,img:'../img/tz-c5.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:6,img:'../img/tz-c6.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'},
      { id:7,img:'../img/tz-c7.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前','num':'125'},
      { id:8,img:'../img/tz-c2.jpg',name:'ipad 九成新',prinf:'1000',msg:'ipad pro2 32G,国行。去年行入手，用了几个月，8成新有意者请与我联系',time:'5分钟前',num:'125'}
    ];

    $scope.detail = $scope.datas[$stateParams.id-1];
    // console.log($scope.detail);

  }]);

