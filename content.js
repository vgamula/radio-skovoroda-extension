/* globls angular */

(function() {
    setTimeout(function() {
        var scope = angular.element(document.querySelector('.content.main-page')).scope();
        var broadcast = scope.broadcastVm;
        var currentTrack = null;
        var streamPlayingData = null;

        function checkPlaying() {
            streamPlayingData = broadcast.isStreamPlaying();
            if (streamPlayingData.radio) {
                currentTrack = broadcast.currentRadioData();
            } else if (streamPlayingData.music) {
                currentTrack = broadcast.currentMusicData();
            } else {
                return;
            }
            document.title = currentTrack.artist + ' - ' + currentTrack.track;
        }
        setInterval(checkPlaying, 1000);
    }, 3000);
})();
