'use strict' 
function vidController($scope, $element, $attrs, $sce){
var ctrl=this;
$scope.source;
$scope.avgRate=function(array){
	var avg=0;
	for (var i=0; i<array.length; i++){
		avg+=array[i];
	}
	return (Math.round((avg/array.length)*10)/10);
};
$scope.titleClick=function(){
	
};

}

app.component('vid',{
templateUrl:'video.html',
controller: vidController,
bindings:{
	vid: '<'
}


});