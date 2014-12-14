// This is a JavaScript file
Global_init_array.my_posts_page = my_posts_page_init;
var api_prefix = "http://134.68.140.203:9394/api/";
ons.ready(function(){
	my_posts_page_init();
});

function my_posts_page_init()
{
	$("#my_posts_page ons-list-item").click( function(){
		console.log("click");

		Home_navigator.pushPage('my_details_page.html');

	});
}