var statedate = "unknown";


function invertstate(state)
{
    var result = state;
    switch(state)
    {
        case "pause" : result = "play"; break;
        case "play"  : result = "pause"; break;
        case "stop"  : result = "play"; break;

    }
    return result;
}

function getPlayerStatusButton(data)
{
    statedata = data;
    return "playerbutton " + invertstate(data.state);
}

function play()
{
    var data = "command=" + invertstate(statedata.state);
    var request;
    request = $.ajax({
        url:  "/api/v1/player",
        type: "POST",
        data: data,
        success: successHandler,
        error: errorHandler,
        async:   false
    });
}

function errorHandler(jqXHR, textStatus, errorThrown)
{
    alert(JSON.stringify(jqXHR) + ' ' + textStatus +'  '+errorThrown);

}

function successHandler(data)
{
    document.getElementById("playerButton").className = getPlayerStatusButton(data);
}

function getstatus()
{
    var request;
    request = $.ajax({
        url:  "/api/v1/player",
        type: "GET",
        success: successHandler,
        error: errorHandler,
        async:   false
    });
}

