angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Profile", function(method, url, data)
    {

        var result = {
            timestamp: new Date().toISOString(),
            image: "bundles/mocks/css/images/user.png",
            name: "John Doe",
            direccion: "Vlakirias #215",
            email: "JDoe@correo.cl",
            rol: "Administrador"
        }

        return [
            200,
            result,
            {}
        ];

    });
    //-------------------------------------------------------------

});
