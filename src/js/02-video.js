import Player from '@vimeo/player';
const iframe = document.querySelector('iframe');

const player = new Player('handstick', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
    duration: 61.857
    percent: 0.049
    seconds: 3.034
}

player.on('play', onPlay);


player.setCurrentTime(30.456).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
player.on('timeupdate', throttle(function(data) {
    const currentTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', currentTime.toString());
}, 1000));