var KEY = 'AIzaSyAFA7-hznlGOmO6btsfsr-bmyEFos7y3dM';

var YouTube = {
    getLastVideos: function () {
        var d = jQuery.Deferred();
        $.ajax({
            url: "https://www.googleapis.com/youtube/v3/videos",
            data: {
                part: 'snippet',
                key: KEY,
                chart: 'mostPopular',
                maxResults: 9
            },
            success: function( result ) {
                d.resolve(result)
            },
            error: function (e) {
               d.reject(e)
            }
        });

        return d.promise()
    }
};