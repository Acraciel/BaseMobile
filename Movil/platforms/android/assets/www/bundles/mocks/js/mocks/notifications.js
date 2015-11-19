angular.module('mocks.api')

.run(function(mock, $log)
{
    //-------------------------------------------------------------
    mock.whenGET("/Notifications", function(method, url, data)
    {
        var result = {
            timestamp: new Date().toISOString(),
            items: [
            {
                name: "Póliza generada",
                observation: "Juan Jorquera ha generado una cotización"
                
            },
            {
                name: "Póliza emitida",
                observation: "Alfredo Gonzales emitió una póliza"
                
            }]
        };

        return [
            200,
            result,
            {}
        ];
    });
    //-------------------------------------------------------------

});
