function setPlayeroOtionButton(id, active)
{
    var el = $('.' + id);
    if (active)
    {
        el.css({border : '2px solid #9DB029'});
        el.val(1);
    }
    else
    {
        el.css({border : '1px solid black'})
        el.val(0);
    }
}

function handleSetPlayerOptionButtons(data)
{
    setPlayeroOtionButton("repeatbutton", data.status.repeat == "1");
    setPlayeroOtionButton("shufflebutton", data.status.random == "1");
}


function changePlayerOptionButtonState(id, callback)
{
    var el = $('.' + id);
    el.click(function() {
       var newVal = (1 + parseInt(el.val(),10)) % 2;
       setPlayeroOtionButton(id, newVal);
       callback("active=" + newVal);
    });
}

function declarePlayerOptionButtons()
{
   changePlayerOptionButtonState("repeatbutton", onRepeatButtonClicked);
   changePlayerOptionButtonState("shufflebutton", onRandomButtonClicked);
}
