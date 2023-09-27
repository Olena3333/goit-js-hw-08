import Player from '@vimeo/player';
import throttle from 'lodash.throttle';


const key = "videoplayer-current-time";
const iframe = document.querySelector("#vimeo-player");
const player = new Player(iframe);

function onPlay(playTime) {
    const time = playTime.seconds;
    localStorage.setItem(key, time)

    }

player.on('timeupdate', throttle(onPlay, 1000));        
player.setCurrentTime(localStorage.getItem(key) || 0);

    




