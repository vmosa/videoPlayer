function starsController($scope, $rootScope, $http, $event){
$scope.stars=[1,2,3,4,5];
$scope.starClick=function(){
	var id=event.target.id;
	
}


}

app.component('stars',{
templateUrl: 'stars.html',
controller: starsController


});