function run()
{
    setcurrentsong()
    setplayerbutton()
    runupdate();
}


function runupdate()
{
    setTimeout(update,500)
}

function update()
{
    setcurrentsong()
    setplayerbutton()
    runupdate()
}

