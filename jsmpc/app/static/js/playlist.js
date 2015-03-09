function addsongs(id, songs, callback)
{
    var el = $('#' + id);
    el.css({
        overflow: 'hidden'
    });

    var len = songs.length;
    for (var i = 0; i < len; i++)
    {
        var songid = songs[i].file.id;
        el.append('<li class="' +  songid + '">' + songs[i].file.title + '</li>');
        var item = $('li').eq(i);

        item.click(
            function()
            {
                callback($(this).attr("class"));
            })
    }
}

function markPlayingSong(id, songid)
{
    var songItem = $('#' + id).find('.' + songid);
    songItem.css('background', 'blue');
}


function smoothAdd(id, text)
{
    var el = $('#' + id);

    var h = el.height();

    el.css({
        height:   h,
        overflow: 'hidden'
    });

    var ulPaddingTop    = parseInt(el.css('padding-top'));
    var ulPaddingBottom = parseInt(el.css('padding-bottom'));

    el.prepend('<li>' + text + '</li>');

    var first = $('li:first', el);
    var last  = $('li:last',  el);

    var foh = first.outerHeight();

    var heightDiff = foh - last.outerHeight();

    var oldMarginTop = first.css('margin-top');

    first.css({
        marginTop: 0 - foh,
        position:  'relative',
        top:       0 - ulPaddingTop
    });

    last.css('position', 'relative');

    el.animate({ height: h + heightDiff }, 1500)

    first.animate({ top: 0 }, 250, function() {
        first.animate({ marginTop: oldMarginTop }, 1000, function() {
            last.animate({ top: ulPaddingBottom }, 250, function() {
                last.remove();

                el.css({
                    height:   'auto',
                    overflow: 'visible'
                });
            });
        });
    });
}

function handlescrolldown(id)
{
   smoothAdd(id, "0 : should be next element");
}
