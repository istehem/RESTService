function postSuccessHandler(data)
{
    ;
}

function getSuccessHandler(data)
{

    var command = "" + Object.keys(data);
    switch(command)
    {
        case "current_song" : handlesetcurrentsong(data); break;
        case "state"        : handlepressingplayerbutton(data); break;
        case "playlist"     : handlesetplaylist(data); break;
        case "status"       : handleSetPlayerOptionButtons(data); break;
    }
}

function errorHandler(jqXHR, textStatus, errorThrown)
{
    alert(JSON.stringify(jqXHR) + ' ' + textStatus +'  '+errorThrown);
}

function next()
{
    put("/api/v1/next","");
}

function previous()
{
    put("/api/v1/previous","");
}

function setcurrentsong()
{
    get("/api/v1/currentsong");
}
function setplayerbutton()
{
    get("/api/v1/player");
}

function setplaylist()
{
    get("/api/v1/playlist/");
}

function getstatus()
{
    get("/api/v1/status");
}

function onPlaylistSongClicked(id)
{
    put("/api/v1/playlist/" + id);
}

function onPlayButtonClicked(state)
{
    var data = "state=" + invertstate(state);
    put("/api/v1/player", data);
    setplayerbutton();
}

function onNextButtonClicked()
{
    put("/api/v1/next","");
}

function onPreviousButtonClicked()
{
    put("/api/v1/previous","");
}

function onRandomButtonClicked(state)
{
    put("/api/v1/random",state);
}

function onRepeatButtonClicked(state)
{
    put("/api/v1/repeat",state);
}

function setPlayerUpdates()
{
    setplayerbutton();
    setplaylist();
    setcurrentsong();
    getstatus();
}
