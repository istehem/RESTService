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

function play2()
{
    var data = "command=" + invertstate(statedata.state);
    post("/api/v1/player",data);
}
