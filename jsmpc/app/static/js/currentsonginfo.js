function handlesetcurrentsong(data)
{
    var songtitle = $('#songtitle');

    if (songtitle.val() != data.current_song.id)
    {
        songtitle.text(data.current_song.title);
        markSong("scroller", data.current_song.id);
        if(songtitle.val() != "")
        {
            unmarkSong("scroller", songtitle.val());
        }
    }
    songtitle.val(data.current_song.id);
}

function declareCurrentSongListenEvents()
{
    var songtitle = $('#songtitle');

    songtitle.on("playlistitemclicked", function() {
         setcurrentsong();
    });
    songtitle.on("arrowbuttonclicked", function() {
         setcurrentsong();
    });
}
