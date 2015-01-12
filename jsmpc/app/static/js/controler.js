function postSuccessHandler(data)
{
    var command = "" + Object.keys(data);
    switch(command)
    {
        case "state" : handlesetplayerbutton(data); break;
    }
}

function getSuccessHandler(data)
{

    var command = "" + Object.keys(data);
    switch(command)
    {
        case "current_song" : handlesetcurrentsong(data); break;
        case "state"        : handlesetplayerbutton(data); break;
    }
}

function errorHandler(jqXHR, textStatus, errorThrown)
{
    alert(JSON.stringify(jqXHR) + ' ' + textStatus +'  '+errorThrown);
}


function play()
{
    var data = "command=" + invertstate(statedata.state);
    post("/api/v1/player",data);
}

function next()
{
    post("/api/v1/next","");
}

function previous()
{
    post("/api/v1/previous","");
}

function setcurrentsong()
{
    get("/api/v1/currentsong");
}
function setplayerbutton()
{
    get("/api/v1/player");
}
