// This is a JavaScript file
var api_prefix = "http://134.68.140.203:9394/api/";
var Global_init_array = {};
ons.ready(function(){
	
	all_init();
});

function all_init()
{
	// find which page is under the process of init
	//then call the init function
	document.addEventListener("pageinit", function(e) {
 			for( var i in Global_init_array ) {
 				if( i == e.target.id ) {
 					Global_init_array[i]();
 					break;
 				}
 			} 		
		}, false);
}
