angular.module('starter.controllers', ['ionic', 'starter.services'])

        .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {

        })

        .controller('SplashCtrl', function ($scope, $state) {

        })

        .controller('DashboardCtrl', function ($scope, $state) {

        })

        .controller('StudentProfilesCtrl', function ($scope, $http) {

        })

        .controller('SubscribedSchoolsCtrl', function ($scope, $http, mFees) {
            mFees.getSchoolsList()
                    .then(function () {
                        $scope.schools = mFees.subscribedschools;
                    })
        })


        .controller('PaySchoolFeesCtrl', function ($scope, $state, mFees) {
            $scope.queryAccountInfo = function (schoolcode, studentcode) {
                mFees.setStudentInformation(schoolcode, studentcode);
                $state.go('app.completepayment');
            }

        })

        .controller('CompletePaymentCtrl', function ($scope, $state, mFees) {
            $scope.studentinfo = mFees.getStudentInformation();   
            console.log($scope.studentinfo);       
        });