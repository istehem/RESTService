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
        case "state"        : handlesetplayerbutton(data); break;
        case "playlist"     : handlesetplaylist(data); break;
    }
}

function errorHandler(jqXHR, textStatus, errorThrown)
{
    alert(JSON.stringify(jqXHR) + ' ' + textStatus +'  '+errorThrown);
}


function play()
{
    var data = "state=" + invertstate(statedata.state);
    put("/api/v1/player",data);
}

function scrolldown()
{
    handlescrolldown("scroller")
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

function onPlaylistSongClicked(id)
{
    put("/api/v1/playlist/" + id);
}
