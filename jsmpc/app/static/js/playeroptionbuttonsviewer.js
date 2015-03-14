function setPlayeroOtionButton(id, active)
{
    var el = $('.' + id);
    if (active)
    {
        el.css({border : '2px solid #9DB029'})
    }
    else
    {
        el.css({border : '1px solid black'})
    }
}

function handleSetPlayerOptionButtons(data)
{
    setPlayeroOtionButton("repeatbutton", data.status.repeat == "1");
    setPlayeroOtionButton("shufflebutton", data.status.random == "1");
}
