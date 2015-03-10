function run()
{
    setplayerbutton()
    setcurrentsong()
    setplaylist()
    runupdate();
}


function runupdate()
{
    setTimeout(update,500)
}

function update()
{
    setplayerbutton()
    setcurrentsong()
    runupdate()
}

