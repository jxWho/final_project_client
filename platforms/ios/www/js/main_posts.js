// This is a JavaScript file
Global_init_array.main_posts_page = main_post_init;
var api_prefix = "http://134.68.140.203:9394/api/";
ons.ready(function(){
	main_post_init();
});

function main_post_init()
{
	get_post_and_update();
	$("#write_post_button").click( function(){
		ons.createDialog("writing_post.html").then(function(dialog){
											dialog.show();
										});
	});
	
	$('#main_post_refresh').click( function(){
	});

}

function get_post_and_update()
{
	$.ajax({
		url: api_prefix + "post",
		type: "GET",
		dataType:"json",
		async: false,
		success: function( data, status ) {
			if( status == "success" && parseInt(data.status) == 1 ) {
				localStorage.posts = data.posts;
				update_posts_list( data.posts );
			}
		}
	});
}

function get_list_with_template( post ) {
	return '' +
	'<ons-list modifier="inset">' +
	'<ons-list-item class="list__item--tappable square_posts item" modifier="chevron"'
	+ ' id=' + post.postID + ' userID=' + post.userID
	+ '>' + '<ons-row>'
	+ '<ons-col width="60px">' + '<div class="item-thum"></div></ons-col>'
	+ '<ons-col><header><span class="item-title">'
	+ post.title.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</span>'
	+ '</header>'
	+ '<p class="item-desc">' 
	+ post.content.replace(/</g, "&lt;").replace(/>/g, "&gt;") + '</p>'
	+ '</ons-row>'
	+'</ons-list-item></ons-list>';
}

function clean_old_list()
{
	$('div#main_post_list ons-list').remove();
}

function update_posts_list( posts )
{
	clean_old_list();
	for( var i in posts ) {
		var post = $( get_list_with_template( posts[i] ) );
		post.appendTo('div#main_post_list');
		 ons.compile(post[0]);
	}
	
		//for each post, click to navigate to a detail page
	$("#main_posts_page ons-list-item").click( function() {
		console.log("click");
		main_navigator.pushPage('post_detail.html');
	})
}