import React, { useState, useEffect } from 'react';
import './Video.css';


const Video = () => {


    return (
        <div class='video-player'>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src="https://www.youtube.com/embed/il3TSLI7Aqg?autoplay=1&origin=http://example.com"
            frameborder="0"></iframe>
        </div>
    )
}


export default Video;