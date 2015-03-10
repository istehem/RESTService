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


function handlepressingplayerbutton(data)
{
    var id  = "playerbutton";
    var el = $('#' + id);
    el.off("click");
    changePlayerImage(id, data.state);
    el.click(function() {
        el.fadeTo(400,0.7);
        onPlayButtonClicked(data.state);
        el.fadeTo(400,1);
    });
}

function changePlayerImage(id, state)
{
    var el = $('#' + id);
    el.removeClass();
    el.addClass(getPlayerStatusButton(state));
}

function declarePlayerButtonListenEvents()
{
    var el = $('#playerbutton');

    el.on("playlistitemclicked", function(){
        changePlayerImage("playerbutton", "play");
        el.click(function() {
            onPlayButtonClicked("play");
         });
    });
    el.on("arrowbuttonclicked", function(){
        changePlayerImage("playerbutton", "play");
        el.click(function() {
            onPlayButtonClicked("play");
         });
    });
}

/* Next and Previous Buttons */
/******************************************************************************/

function setArrow(id, arrowClass, callback)
{
    var el = $('#' + id);
    el.addClass(arrowClass);
    el.click(function() {
            el.fadeTo(400, 0.7);
            el.fadeTo(400, 1);
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
