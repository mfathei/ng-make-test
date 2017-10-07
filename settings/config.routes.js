app
.config(
	['$stateProvider','$urlRouterProvider',
		function($stateProvider,$urlRouterProvider){
		
		$urlRouterProvider.otherwise('nameOfState');
			//%DEFAULT_STATE
			$stateProvider
				.state('nameOfState',{
					url:'/nameOfState',
					templateUrl:'template/nameOfState.html',
					controller:'nameOfStateCTRL'
				}
			)
			.state('testState',{
					url:'/testState',
					templateUrl:'template/testState.html',
					controller:'testStateCTRL'
				}
			)
			


		}
	]
)
