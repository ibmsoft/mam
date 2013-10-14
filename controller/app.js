// if(session.get("mamConsoleUserLogin") != "true" && request.getRequestURI() != appInfo().server_url + "login"){
// 	response.sendRedirect(appInfo().server_url + "login");
// }
var index = function(){
	response.sendRedirect('console/dashboard');
	// var user = session.get("mamConsoleUser");
	// if(user!=null){
	// 	if(user.isAdmin){
	// 		response.sendRedirect('console/dashboard');
	// 	}else{
	// 		response.sendRedirect(appInfo().server_url + 'users/devices?user=' + userFeed.username);
	// }
};

/*
	Top navigation is generated through this function
*/
var navigation = function(role) {

    switch(role) {
        case "admin":
            var topNavigation = [{
                name : "Home"
            }];
            break;
        case "manager":
            break;
        default:
    };
    // var currentUser = session.get("mamConsoleUser");
	var currentUser = true;
    var topNavigation = [];
    var configNavigation = [];
    if(currentUser){
        if(role == 'admin'){
			var app_info = uiConfig();
            topNavigation = [
                {name : "Dashboard"	, link: app_info.MAM_UI_URI + "console/dashboard", displayPage: "dashboard", icon: "icon-th-large"},
                {name : "Configurations", link: app_info.MAM_UI_URI + "users/configuration", displayPage: "configuration", icon:"icon-wrench"},
                {name : "Management"	, link: app_info.MAM_UI_URI + "console/management", displayPage: "management", icon:"icon-briefcase"},
            ];
            var configNavigation =	[
                {name : "Users", link: app_info.MAM_UI_URI + "users/configuration", displayPage: "users", icon:"icon-user"},
                {name : "Roles", link: app_info.MAM_UI_URI + "roles/configuration", displayPage: "roles", icon:"icon-group"},
                {name : "Policies", link: app_info.MAM_UI_URI + "policies/configuration", displayPage: "policies", icon:"icon-lock"},
            ];
        }else if(role == 'mdmadmin'){
            topNavigation = [
                {name : "Dashboard"	, link: app_info.MAM_UI_URI + "console/dashboard", displayPage: "dashboard", icon: "icon-th-large"},
                {name : "Configurations", link: app_info.MAM_UI_URI + "users/configuration", displayPage: "configuration", icon:"icon-wrench"},
                {name : "Management"	, link: app_info.MAM_UI_URI + "devices/management", displayPage: "management", icon:"icon-briefcase"},
            ];
            var configNavigation =	[
                {name : "Users", link: app_info.MAM_UI_URI + "users/configuration", displayPage: "users", icon:"icon-user"},
                {name : "Roles", link: app_info.MAM_UI_URI + "roles/configuration", displayPage: "roles", icon:"icon-group"},
                {name : "Policies", link: app_info.MAM_UI_URI + "policies/configuration", displayPage: "policies", icon:"icon-lock"},
            ];
        }else{
            topNavigation = [
                {name : "My Devices"	, link: app_info.MAM_UI_URI + "users/devices", displayPage: "management", icon:"icon-briefcase"}
            ];
        }
    }

    return {
        topNavigation : topNavigation,
        configNavigation: configNavigation
    };
};
var theme = function(){
	return require('/config/ui.json').MAM_THEME;
}

/*
	Load the ui config json
*/
var uiConfig = function(){
	return require('/config/ui.json');
}

/*
	Initial context used by each controller
*/
var context = function() {

    // var contextData = {};
    //    var currentUser = session.get("mamConsoleUser");  
    //    if(currentUser){
    //        if(currentUser.isAdmin){
    //            contextData.user = {
    //                name : "Admin",
    //                role : "admin"
    //            };
    //        }else if(currentUser.isMDMAdmin){
    //            contextData.user = {
    //                name : "MDM Admin",
    //                role : "mdmadmin"
    //            };
    //        }else{
    //            contextData.user = {
    //                name : "User",
    //                role : "user"
    //            };
    //        }
    //    }else{
    //        contextData.user = {
    //            name : "Guest",
    //            role : "guest"
    //        };
    //    }
	var defaultContext = {
		ui: uiConfig(),
		layout: '1-column',
		navigation: navigation('admin'),
		theme: theme(),
		resourcePath: "../themes/" + theme() + "/img/"
	};
    return defaultContext;
};