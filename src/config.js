var APP_URL = 'http://qwcutaemqenjxfm.localhost:3000';
var API_URL = 'http://api.localhost:3000';

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

var appUrl = query.appUrl || APP_URL;
var apiUrl = query.apiUrl || API_URL;
angular.module('demoApp')
  .constant('AppConfig', {
  appUrl: appUrl,
  apiUrl: apiUrl,
  forms: {
    userLoginForm: appUrl + '/user/login',
    userRegisterForm: appUrl + '/user/register',
		inviteUsers: appUrl + '/invite',
		reset: appUrl + '/reset',
		userEdit: appUrl + '/user'
  }

});
