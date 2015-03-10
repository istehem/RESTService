function handlesetcurrentsong(data)
{
    var songtitle = document.getElementById("songtitle");
    if (songtitle.value != data.current_song.id)
    {
        songtitle.innerHTML = data.current_song.title;
        markSong("scroller", data.current_song.id);
        unmarkSong("scroller", songtitle.value);
    }
    songtitle.value = data.current_song.id;
}


