// This is a JavaScript file
var api_prefix = "http://134.68.140.203:9394/api/";
ons.ready(function(){
	
	bindEvents();
});

function bindEvents() {
	$("#new_user_page_submitButton").click( submitNewUserForm );
}

function submitNewUserForm()
{
	$.ajax({
		url: api_prefix + "user/register",
		success:function(data, status){
			if( status == "success" ) {
				if ( parseInt(data.status) == 1 ) {
					$.when( alert("Register successfully") ).then(function(){
							window.location.href="index.html";
					});
				}
			}
		},
		data: {
			"username": $("#username").val(),
			"password": $("#password").val(),
			"phoneNumber": $("#phoneNumber").val(),
			"email": $("#email").val()
		},
		type: 'POST',
		dataType: "json"
	});
}
