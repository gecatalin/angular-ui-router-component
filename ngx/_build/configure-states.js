export default function(ngModule, options){

  ngModule.config(configureStates);

  /**
   * Configure states
   *
   * @param $stateProvider
   */
  function configureStates($stateProvider){

    $stateProvider
      .state('state', {
        url: '/url',
        views: {
          'content@': {
            templateUrl: options.baseUrl + '/index.html'
          }
        }
      });

  }

  // Inject dependencies
  configureStates.$inject = ['$stateProvider'];

};

