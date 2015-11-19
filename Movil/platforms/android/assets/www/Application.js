angular.module('App', [
        'gale' //ANGULAR-GALE LIBRARY
        , 'ionic' //IONIC
        , 'app' //CUSTOM PROJECT LIBRARY

        , 'ngCordova' //CORDOVA LIBRARIES
        , 'angularMoment' //ANGULAR MOMENT JS 

        , 'mocks' //Mocks Only for Testing, Remove in PRD

        , 'ngIOS9UIWebViewPatch' //IOS 9 FICKLERING PATCH (https://gist.github.com/IgorMinar/863acd413e3925bf282c)
    ])
    .run(function($location, $Configuration, $log)
    {
        var application = $Configuration.get("application");
        $log.info("application start... ;)!",
        {
            env: application.environment,
            version: application.version
        });
        $location.url("boot");
    })
    .config(function(mockProvider)
    {
        //Mocking Module (While the API is in Construction)
        mockProvider
        .enable()
        .setDelay(700); //Simulate a Short Delay ^^, (More 'Real' experience)
    })
    
    .config(function(CONFIGURATION)
    {
        //Enable Debug for GPS and RouteTracker
        if (CONFIGURATION.debugging)
        {
            //Debugger Information
            
        }

    })
    .config(function($ApiProvider)
    {
        //API Base Endpoint
        var API_ENDPOINT = 'http://ansmobil.com/API/v1';
        $ApiProvider.setEndpoint(API_ENDPOINT);
    })
    .config(function($IdentityProvider)
    {
        $IdentityProvider
            //.enable() //Enable
            .setIssuerEndpoint("/Security/Authorize")
            .setLogInRoute("security/identity/login");

    })
    .run(function($ionicPlatform)
    {
        $ionicPlatform.ready(function()
        {
            if (window.StatusBar)
            {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider)
    {
        $stateProvider
            .state('app',
            {
                url: "/app",
                abstract: true,
                // ---------------------------------------------
                // ONE-PAGE COLUMNS TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/layout.html",
                controller: "DefaultLayoutController"
            })
            .state('nomenu',
            {
                url: "/nomenu",
                abstract: true,
                // ---------------------------------------------
                // ONE-PAGE COLUMNS TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/no-menu.html",
                controller: "NoMenuLayoutController"
            })
            .state('exception',
            {
                url: "/exception",
                abstract: true,
                // ---------------------------------------------
                // EXCEPTION TEMPLATE
                // ---------------------------------------------
                templateUrl: "views/layouts/exception.html",
                controller: "ExceptionLayoutController"
            });

        $urlRouterProvider.otherwise(function($injector, $location)
        {
            if ($location.path() !== "/")
            {
                var $state = $injector.get("$state");
                $state.go("exception.error/404");
            }
        });
    })
    .config(function($logProvider, CONFIGURATION)
    {
        $logProvider.debugEnabled(CONFIGURATION.debugging || false);
    });
