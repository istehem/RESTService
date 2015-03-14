function run()
{
    setplayerbutton();
    declarePlayerButtonListenEvents();

    setplaylist();

    setcurrentsong();
    declareCurrentSongListenEvents();

    setNextButton();
    setPreviousButton();

    getstatus();

    setInterval(function(){setPlayerUpdates()}, 2000);
}
