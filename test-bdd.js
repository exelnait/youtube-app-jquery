describe("youtube app", function() {
    describe("API", function() {
        it("получение последний ютуб видео", function (done) {
            $.when(YouTube.getLastVideos()).then( function () {
                done()
            });
        });
        it("видео больше чем 0", function (done) {
            $.when(YouTube.getLastVideos()).then( function (result) {
                if (result.items.length > 0)
                    done()
            });
        })
    });
    describe("UI", function() {
        it ("Видео рендерятся", function (done) {
            $('body').append('<div id="last"></div>');
            $('#last').hide();
            $.when(YouTube.getLastVideos()).then( function (result) {
                var items_length = result.items.length;
                renderVideos('#last', result.items);
                if ($('#last').children().length == items_length)
                    done();
            });
        })
    });
});