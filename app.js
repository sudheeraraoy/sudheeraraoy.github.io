'use strict';

 
var arr=angular.module('LunchCheck',[]);
arr.controller('LunchCheckController',function($scope)
{

    $scope.name="";
    //$scope.name="";
    $scope.change=function() 
    {
        if($scope.name=="")
           $scope.msg="";
        else  


        {
        $scope.string=$scope.name;
        $scope.string=($scope.string).trim();
        $scope.wordsarray=$scope.string.split(',');
        $scope.kount=$scope.wordsarray.length;
        }

        if($scope.kount<=3)
           $scope.msg="Enjoy!";
        else if($scope.kount>3)
        $scope.msg="Too much!";  

    }
     

}


);

