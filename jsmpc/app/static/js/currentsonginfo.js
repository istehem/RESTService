function handlesetcurrentsong(data)
{
    document.getElementById("songtitle").innerHTML=data.current_song.title;
    markPlayingSong("scroller", data.current_song.id);
}


