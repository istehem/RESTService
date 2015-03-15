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
    declarePlayerOptionButtons();

    setInterval(function(){setPlayerUpdates()}, 2000);
}
