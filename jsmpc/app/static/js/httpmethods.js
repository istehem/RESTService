function post(endpoint,data)
{
    var request;
    request = $.ajax({
        url:  endpoint,
        type: "POST",
        contentType: "application/json",
        data: data,
        success: postSuccessHandler,
        error: errorHandler,
        async:   false
    });
}

function put(endpoint,data)
{
    var request;
    request = $.ajax({
        url:  endpoint,
        type: "PUT",
        contentType: "application/json",
        data: data,
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
        async:   true
    });
}
