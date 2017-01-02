/*{% if domain %}
var APP_URL = '{{ domain }}';
var API_URL = '{{ domain }}';
{% else %}
var APP_URL = '{{ protocol }}://{{ path }}.{{ host }}';
var API_URL = '{{ protocol }}://api.{{ host }}';
{% endif %}*/

var APP_URL = 'https://mvlpuqbnaooebhx.form.io';
var API_URL = 'https://api.form.io';

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
    userRegisterForm: appUrl + '/user/register'
  }

});
