'use strict' 
function vidListController($scope, $rootScope, $element, $attrs, $http, $location, $sce){
var ctrl=this;
$scope.listHide=true;
$scope.videos=[];
$scope.url='';
$rootScope.$watch('vids',function(newVal,oldVal,scope,rootsScope){
	$scope.videos=$rootScope.vids;
	$scope.listHide=false;
	
});
	
}


app.component('videoList',{
templateUrl:'videoList.html',
controller: vidListController,

});