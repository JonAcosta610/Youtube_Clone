import React from 'react';
import './Videos.css';


const Videos = () => {
    const videoId = window.location.pathname
    return (
        <iframe id="ytplayer" type="text/html" width="640" height="360"
        src={`https://www.youtube.com/embed${videoId}?autoplay=1&origin=http://example.com`}
        frameborder="0"></iframe>
    )
}

export default Videos;