import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);


   player.on('play', function() {
     console.log('played the video!');
   });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const TIME_KEY = 'videoplayer-current-time';

   function onPlay (data) {
      localStorage.setItem(TIME_KEY, JSON.stringify(data.seconds));
    };
    
    player.on('timeupdate', throttle(onPlay, 1000));
      

    player.setCurrentTime(localStorage.getItem(TIME_KEY)).then(function(seconds) {
       return seconds; 
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                // the time was less than 0 or greater than the video’s duration
                break;
    
            default:
                // some other error occurred
                break;
        }
    });
