angular.module('app.layouts').controller('DefaultLayoutController', function(
    $scope,
    $state,
    $log,
    $Configuration,
    $timeout,
    $Api
)
{
    //------------------------------------------------------------------------------------
    // Model
    $scope.config = {
        application: $Configuration.get("application"),
        menu:  [
        {
            route: "app.home",
            icon: " ion-home",
            label: "Inicio",
            active: true
        },
        {
            route: "app.profile",
            icon: "ion-ios-person",
            label: "Perfil"
        },
        {
            route: "app.notifications",
            icon: "ion-ios-bell",
            label: "Notificaciones"
        }, ]
    };

    //------------------------------------------------------------------------------------
    // Layout Actions
    $scope.navigateTo = function(item)
    {
        //----------------------------------- 
        //Mark as Active
        angular.forEach($scope.config.menu, function(item)
        {
            item.active = false;
        });
        item.active = true;

        //-----------------------------------
        // Navigate
        $timeout(function()
        {
            $state.go(item.route);
        }, 300);
    };

    // Get Data
    $Api.read("/Profile").success(function(data)
    {
        //Set Profile
        $scope.profile = data;

    });
});
