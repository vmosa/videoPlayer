//'use strict';
function loginFormController($rootScope, $scope, $element, $attrs, $http, $location){
//app
	var lfc=this;
	var hostUrl='http://localhost:3000/';
	$scope.videosJson=[];
	$scope.formShow=true;
	
	$scope.submit=function(){
		var data={
			'username': $scope.name,
			'password': $scope.pass
		};
		$http.post(hostUrl+'user/auth',data)
		.then(
		function(response){
			if (response.data.status=="error"){
				alert(response.data.error);
			}
			else{
			$rootScope.sessionId=response.data.sessionId;
			$rootScope.hostUrl=hostUrl;
			$scope.name=response.data.username;
			var config={
			params:{
				'sessionId': $rootScope.sessionId,
				'skip':0,
				'limit':10
			}
			};
			response='';
			$http.get(hostUrl+'videos',config).then(function(response){
			$scope.videosJson=response.data.data;
			$rootScope.vids=$scope.videosJson;
			console.log($scope.videosJson);
			$scope.formShow=false;	
			},
			function(response){
				
			});
			
			}
				
		},
			function(response){
			alert('no response!!');
		});
		
		
	};
	
	$scope.cancel=function(){
		$scope.name='';
		$scope.pass='';
	};
		
}

app.component('loginForm',{
	templateUrl: 'loginForm.html',
	controller: loginFormController,
	bindings: {
	name: '<',
	pass: '<'
  }
	
});