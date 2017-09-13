'use strict'
app.controller('mainController',['$rootScope','$scope','$http','$sce',function($rootScope,$scope,$http,$sce){
	$rootScope.vids=[];
	$rootScope.sessionId='';
	$rootScope.hostUrl='';
	window.onscroll=function(){
		$scope.getMore();
	}
	$scope.getMore=function(){
	var len=$rootScope.vids.length;
	var config={
			params:{
				'sessionId': $rootScope.sessionId,
				'skip':len,
				'limit':10
			}
			};
	$http.get($rootScope.hostUrl+'videos',config).then(function(response){
	for(var i=0; i<response.data.data.length;i++){
		$rootScope.vids.push(response.data.data[i]);
	}
	
	},
	function(response){
				
	});
	
}

/*angular.element(document.querySelector('#vidList')).bind('mousewheel DOMMouseScroll scroll', function(){
      $scope.getMore();
    });
*/
}]);


