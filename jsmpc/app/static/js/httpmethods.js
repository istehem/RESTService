function post(endpoint,data)
{
    var request;
    request = $.ajax({
        url:  endpoint,
        type: "POST",
        data: data,
        success: postSuccessHandler,
        error: errorHandler,
        async:   false
    });
}

function get(endpoint)
{
    var request;
    request = $.ajax({
        url:  endpoint,
        type: "GET",
        success: getSuccessHandler,
        error: errorHandler,
        async:   false
    });
}
