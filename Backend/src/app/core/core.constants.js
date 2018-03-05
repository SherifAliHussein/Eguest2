(function() {
	angular
		.module('core')
		.constant('appCONSTANTS', {
			 'API_URL': 'http://localhost:36402/api/',
			// 'API_URL': 'http://eguestbackend.azurewebsites.net/api/',
			'defaultLanguage':'en-us',
			'supportedLanguage':{
				'en-us':{'key':'en-us','value':'english'},
				'ar-eg':{'key':'ar-eg','value':'arabic'}
			}
		})
		.constant('messageTypeEnum', {
      success: 0,
      warning: 1,
      error: 2
		}).constant('userRolesEnum', {
			Admin:"Admin",
			Room:"Room"
    });
}());