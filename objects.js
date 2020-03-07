$.ajax({
    'url': 'https://api.kanye.rest/',
    'data': {},
    'type': 'GET',
    'dataType': "json",
}).done(
    function(resultJson) {
        $('#quoteContainer').html(resultJson.quote);
    }).fail(
    function(xhr, status, error) {
        console.log("there was an error" + error);
    }).always(
    function(whr, request) {
        console.log("request complete");
    })