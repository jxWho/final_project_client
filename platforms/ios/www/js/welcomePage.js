// This is a JavaScript file
var api_prefix = "http://134.68.140.203:9394/api/";
ons.ready(function(){
	bindEvents();
	
	if ( 0===1 ) {
		alert('auto');
		$.ajax({
			url: api_prefix + "user/log_in",
			data: {
					"username": "User1",
					"password": "1"
			},
			type: "POST",
			dataType: "json",
			success: function(data, status) {
				if( status == 'success' ) {
						if( parseInt(data.status) == 1 ) {
							localStorage.username = data.username;
							localStorage.password = data.password;
							localStorage.phoneNumber = data.phoneNumber;
							localStorage.email = data.email;
							localStorage.userID = data.userID;
							window.location.href = 'mainContainer.html';
						} else {
							alert('Failed to log in');
						}
				}
			}
	});	
	}
	
});

function bindEvents()
{
	
	$('#log_in_button').click(LogInButtonEvent);
}

function LogInButtonEvent()
{
	var button = ons.findComponent(
		"#" + $(this).attr('id').toString(),
		document.body
	);
	button.startSpin();
	
	$.ajax({
			url: api_prefix + "user/log_in",
			data: {
					"username": $("#user_name").val(),
					"password": $('#password').val()
			},
			type: "POST",
			dataType: "json",
			success: function(data, status) {
				button.stopSpin();
				if( status == 'success' ) {
						if( parseInt(data.status) == 1 ) {
							localStorage.username = data.username;
							localStorage.password = data.password;
							localStorage.userID = data.userID;
							localStorage.phoneNumber = data.phoneNumber;
							localStorage.email = data.email;
							window.location.href = 'mainContainer.html';
						} else {
							alert('Failed to log in');
						}
				}
			}
	});
}