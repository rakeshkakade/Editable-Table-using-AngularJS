var helloApp = angular.module("helloApp", ["xeditable", "ngMockE2E"]);

helloApp.run(function(editableOptions) {
  editableOptions.theme = 'bs3';
});

helloApp.controller("CompanyCtrl", function($scope) {
    $scope.companies = [
        {
            'fname':'Rakesh',
        	'lname': 'Kakade',
        	'headoffice': 'Pune'
        },
    	{  
            'fname':'Pankaj',
        	'lname': 'Kumar',
        	'headoffice': 'Bangalore'
        },
    	{ 
            'fname':'Ravi',
        	'lname': 'Sharma',
        	'headoffice': 'Mumbai'
        }
    ];

    $scope.addRow = function(){		
    	$scope.companies.push({
            'fname':$scope.fname,
            'lname': $scope.lname,
            'headoffice':$scope.headoffice
        });
    	$scope.fname='';
    	$scope.lname='';
    	$scope.headoffice='';
    };

    $scope.remove = function(){
        var newDataList=[];
        $scope.selectedAll = false;
        angular.forEach($scope.companies, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
        }); 
        $scope.companies = newDataList;
    };
        
    $scope.checkAll = function () {
        if (! $scope.selectedAll) {
            $scope.selectedAll = true;
        } else {
            $scope.selectedAll = false;
        }
        angular.forEach($scope.companies, function(personalDetail) {
            personalDetail.selected = $scope.selectedAll;
        });
    };
});