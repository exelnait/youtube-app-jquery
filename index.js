var videos = [];
var favorites = [];

window.onload = function () {
    $.when(YouTube.getLastVideos()).then( function (result) {
       videos =  result.items;
       renderVideos('#last-videos', videos)
    });
    $('#last-videos').on('click', 'button.watch',function () {
        var index  = $(this).parent().data().index;
        var id =  $(this).parent().data().id;
        var title = videos[index].snippet.title;
        openVideo(id, title)
    });
    $('#favorite-videos').on('click', 'button.watch',function () {
        var index  = $(this).parent().data().index;
        var id =  $(this).parent().data().id;
        var title = favorites[index].snippet.title;
        openVideo(id, title)
    });
    $('#last-videos').on('click', 'button.favorite',function () {
        var index  = $(this).parent().data().index;
        videos[index].isFavorite = true;
        favorites.push(videos[index]);
        renderVideos('#last-videos', videos);
        renderVideos('#favorite-videos', favorites);
    });
    $('#favorite-videos').on('click', 'button.favorite',function () {
        var index  = $(this).parent().data().index;
        videos[index].isFavorite = false;
        delete favorites[index];
        renderVideos('#last-videos', videos);
        renderVideos('#favorite-videos', favorites);
    })
};

function renderVideos(id, items) {
    $(id).html('');
    items.forEach(function (item, index) {
        var snippet = item.snippet;
        var favorite_text = 'Избранное';
        if (item.isFavorite) {
            favorite_text = 'Убрать из избранного'
        }
        var video = '<div class="col-sm-6 col-md-4">' +
                        '<div class="thumbnail">' +
                            '<img src="' + snippet.thumbnails.high.url +'" >' +
                            '<div class="caption" data-index="'+index+'">' +
                                '<h3>'+snippet.title+'</h3>'+
                                '<p>' + snippet.description.slice(0, 200) + '...</p>' +
                                '<button class="btn btn-primary watch">Смотреть</button> ' +
                                '<button class="btn btn-warning favorite">' + favorite_text + '</button>' +
                            '</div>'+
                        '</div>' +
                    '</div>';

        $(id).append(video);
    });
}

function openVideo(id, title) {
    $('#openVideoModal').modal('show');
    var iframe = '<iframe width="560" height="315" src="https://www.youtube.com/embed/'+id+'" frameborder="0" allowfullscreen></iframe>';
    $('#openVideoModal .modal-body').html(iframe);
    $('#openVideoModal .modal-title').html(title);
}