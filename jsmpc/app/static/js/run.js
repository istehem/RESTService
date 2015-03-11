function run()
{
    setplayerbutton();
    declarePlayerButtonListenEvents();

    setplaylist();

    setcurrentsong();
    declareCurrentSongListenEvents();

    setNextButton();
    setPreviousButton();

    setInterval(function(){setPlayerUpdates()}, 2000);
}


/*
function run()
{
    setplayerbutton();
    declarePlayerButtonListenEvents();

    setplaylist();

    setcurrentsong();
    declareCurrentSongListenEvents();

    setNextButton();
    setPreviousButton();

    ping();
}


function ping()
{

    setTimeout(function(){
        getstatus();
        ping()
    },1000);
}

*/

