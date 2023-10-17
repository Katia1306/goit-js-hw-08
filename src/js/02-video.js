import Player from '@vimeo/player';

import throttle from 'lodash.throttle';


const iframe = document.querySelector('iframe');

const player = new Player('iframe', {
    id: 19231868,
    width: 640
});

player.on('play', function() {
    console.log('played the video!');
});

const onPlay = function(data) {
   
    duration: 61.857
    percent: 1
    seconds: 61.857

};

player.on('play', onPlay);



player.on('timeupdate', throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
    })
},  1000));