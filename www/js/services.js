angular.module('starter.services', [])
        
        .factory('mFees', function ($q, $http, SERVER) {
            var o = {
                subscribedschools: [],
                studentinforesponse: []
            }

            o.getSchoolsList = function () {
                alert('Fired');
                return $http({
                    method: 'GET',
                    url: SERVER.url + '/schools'
                }).success(function (data) {
                    console.log(data);
                    o.subscribedschools = data;
                });
            }

            o.setStudentInformation = function(schoolcode, studentcode){
                return $http({
                    method: 'POST',
                    contentType: "application/json; charset=utf-8",
                    url: SERVER.url + '/getaccountinformation', 
                    data: {schoolcode: schoolcode , studentcode: studentcode}
                }).success(function (data) {
                    console.log(data);
                    o.studentinforesponse = data;
                });

                
            }

            o.getStudentInformation = function(){
                return o.studentinforesponse;
            }
            return o;
        })

