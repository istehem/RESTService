function run()
{
    setplayerbutton();
    setplaylist();
    setcurrentsong();
    setNextButton()
    setPreviousButton()
    ping();
}


function ping()
{

    setTimeout(function(){
        getstatus();
        ping()
    },1000);
}


