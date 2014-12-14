// This is a JavaScript file
Global_init_array.settings_page = setting_page_init;
var api_prefix = "http://134.68.140.203:9394/api/";

ons.ready(function(){
	setting_page_init();	
});

function setting_page_init()
{
	$("#settings_page #setting_page_userName").val( localStorage.username);
	$("#settings_page #setting_page_phonenumber").val( localStorage.phoneNumber);
	$("#settings_page #setting_page_email").val( localStorage.email );
}
