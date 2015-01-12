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
    return "playercontroler playerbutton " + invertstate(data.state);
}


function handlesetplayerbutton(data)
{
    document.getElementById("playerbutton").className = getPlayerStatusButton(data);
}
