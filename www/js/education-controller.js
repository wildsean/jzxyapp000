angular.module('education.controller', [])

  .controller('AppCtrl', function($scope, $ionicModal, $timeout) {

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
  })


  .controller('EducationCtrl', function($scope) {
    $scope.title='教育培训';
  })
  .controller('ExtremityCtrl', function($scope) {
    $scope.title='详细';
    $scope.detail = [
      {
        id:'1',
        poster:'../img/dd_01.png',
        name:'前端工程师培训',
        price:'2999',
        time:'6',
        t_class:'10月8日10:00-16:00',
        place:'石景山总工会二层博看文思',
        introduce:'C语言堪称计算机语言的母语,C语言基础部分更是学习计算机语言的启蒙部分,C语言(上)课程内容如下:'+
        '\n'+
        'c语言包括开发环境，数据的编辑、编译、运行、编译器、变量、常量、标识符、关键字、数据类型、基本流程控制、和函数等概念' +
        '为后面的学习打下基础。',
        a_title:'C语言介绍及基本概念',
        menu:[
          {
            a:'C语言简介'
          },
          {
            a:'C语言的基本概念-1'
          },
          {
            a:'C语言的基本概念-2'
          },
          {
            a:'C语言的基本概念-3'
          }
        ]
      }
    ];
  })
  .controller('DetailCtrl', function($scope) {
    $scope.title='教育培训';
    $scope.product = [
      {
        id:'1',
        poster:'../img/ed_01.png',
        name:'托福TPO 新东方老师细讲',
        price:'299',
        time:'6'
      },
      {
        id:'2',
        poster:'/img/ed_02.png',
        name:'四大高薪行业晋级班',
        price:'2000',
        time:'6'

      },
      {
        id:'3',
        poster:'../img/ed_03.png',
        name:'托福TPO 新东方老师细讲',
        price:'299',
        time:'6'

      },
      {
        id:'4',
        poster:'../img/ed_04.png',
        name:'四大高薪行业晋级班',
        price:'2000',
        time:'6'

      },
      {
        id:'5',
        poster:'../img/ed_05.png',
        name:'四大高薪行业晋级班',
        price:'2000',
        time:'6'

      },
      {
        id:'6',
        poster:'../img/ed_06.png',
        name:'四大高薪行业晋级班',
        price:'2000',
        time:'6'

      }

    ];
  })
  .controller('PlaylistCtrl', function($scope, $stateParams) {
  })
  .controller('myctrl', function($scope, $stateParams) {
    $scope.input = {//初始化，避免ng-model绑定取不到值
      Tel:''
    }
    $scope.$watch('input.ser', function(newValue, oldValue) {
      console.log($scope.input.Tel);
      if ($scope.input.Tel != oldValue){
        //当value改变时执行的代码
      }
    });
    $scope.$watch('input.Pwd', function(newValue, oldValue) {
      console.log($scope.input.Tel);
      //当value改变时执行的代码
    });
  });

