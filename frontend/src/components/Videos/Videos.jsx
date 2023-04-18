import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import CommentBox from '../CommentBox/CommentBox';
import Search from '../Search/Search';
import './Videos.css';


const Videos = ({}) => {
  const [thumbnailUrl, setThumbnailUrl] = useState('')
  const [videoName, setVideoName] = useState('')
  const [descriptionName, setDescriptionName] = useState('')
  const [videos, setVideos] = useState([])
  const videoId = window.location.pathname.slice(1)
  // fetchThumbnail()

  const fetchThumbnail = async () => {
      const response = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&part=snippet&key=AIzaSyBtCSiUHpyDxaFxJ5sA5kPcCeH-4udJkTU`);
      const thumbnailUrl = response.data.items[0].snippet.thumbnails.medium.url;
      const name = response.data.items[0].snippet.title;
      const description = response.data.items[0].snippet.description;
      setVideoName(name)
      setDescriptionName(description)
      setThumbnailUrl(thumbnailUrl);
  };
  
  useEffect( () => {
      fetchThumbnail()
  },[])

  useEffect(async () => {
      const relatedVideoResponse = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${videoName}&key=AIzaSyBtCSiUHpyDxaFxJ5sA5kPcCeH-4udJkTU&part=snippet&type=video&maxResults=6`);
      setVideos(relatedVideoResponse.data.items)
  }, [videoName])
      
    return (
      <>
          <Search />
          <div style={{'display': 'flex'}}>
              <div>
                  <h3>{videoName}</h3>
                  <iframe id="ytplayer" type="text/html" width="640" height="360"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&origin=http://example.com`}
                  frameborder="0"></iframe>
                  <p>{descriptionName}</p>
                  <CommentBox videoId={videoId}/>
              </div>
              <div class='video-player'>
                  {videos.map((video) => (
                      <Link to={`${video.id.videoId}`}>
                          <img src={`${video.snippet.thumbnails.default.url}`} style={{width: 250, height: 160, padding: 10}} ></img>
                      </Link>
                  ))}
              </div>
          </div>
      </>
    );
};

export default Videos;