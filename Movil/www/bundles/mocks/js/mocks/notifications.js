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
                name: "Entrada 1",
                observation: "Lorem ipsum dolor sit amet."
                
            },
            {
                name: "Entrada 2",
                observation: "Obcaecati quaerat, in labore nihil neque."
                
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
