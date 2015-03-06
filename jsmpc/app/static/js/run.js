function run()
{
    setcurrentsong()
    setplayerbutton()
    setplaylist()
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

