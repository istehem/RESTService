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

function getPlayerStatusButton(state)
{
    statedata = state;
    return "playercontroler playerbutton " + invertstate(state);
}


function handlesetplayerbutton(data)
{
     changePlayerImage("playerbutton", data.state, onPlayButtonClicked);
}

function changePlayerImage(id, state, callback)
{
    var el = $('#' + id);
    el.removeClass();
    el.addClass(getPlayerStatusButton(state));
    el.click(function() {
            callback(state)
    });
    el.on("playlistitemclicked", function(){
            if (state == "pause" || state == "stop")
            {
                callback(state);
            }
    });
    el.on("arrowbuttonclicked", function(){
            if (state == "pause" || state == "stop")
            {
                callback(state);
            }
    });
}

function setArrow(id, arrowClass, callback)
{
    var el = $('#' + id);
    el.addClass(arrowClass);
    el.click(function() {
            callback();
            triggerEventsHandler(id)
    });
}

function setNextButton()
{
    setArrow("nextbutton", "arrow next", onNextButtonClicked);
}

function setPreviousButton()
{
    setArrow("previousbutton", "arrow previous", onPreviousButtonClicked);
}
