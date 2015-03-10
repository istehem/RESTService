function triggerEventsHandler(id)
{
    switch(id)
    {
        case "scroller": triggerPlaylistEvents(); break;
        case "playerbutton": triggerPlayerButtonEvents(); break;
        case "previousbutton" : triggerPreviousButtonEvents(); break;
        case "nextbutton" : triggerNextButtonEvents(); break;
    }
}

function triggerPlaylistEvents()
{
    var myEvent = "playlistitemclicked";
    triggerEvent("songtitle", myEvent);
    triggerEvent("playerbutton", myEvent);
}

function triggerPlayerButtonEvents()
{
    ;
}

function triggerPreviousButtonEvents()
{
    triggerArrowPressedEvents();
}

function triggerNextButtonEvents()
{
    triggerArrowPressedEvents();
}

function triggerArrowPressedEvents()
{
    var myEvent = "arrowbuttonclicked";
    triggerEvent("playerbutton", myEvent);
    triggerEvent("scroller", myEvent);
    triggerEvent("songtitle", myEvent);
}

function triggerEvent(id, myEvent)
{
    $('#' + id).trigger(jQuery.Event(myEvent));
}
