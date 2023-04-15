import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Search.css'

const Search = () => {

    const [videos, setVideos] = useState([])
    const [search, setSearch] = useState('')

    const getVideos = async () => {
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyBtCSiUHpyDxaFxJ5sA5kPcCeH-4udJkTU&part=snippet&type=video&maxResults=6`);
        setVideos(response.data.items)
    }

    const handleInputChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSearchChange = () => {
        getVideos()
    }
    return (
        <div class='search-field'>
            <label for='site-search'> Search for Videos </label>
            <input type='search-bar' placeholder='Search' onChange={(event) => handleInputChange(event)}></input>
            <button onClick={handleSearchChange}>Search</button>
            {videos.map((video) => (
                <Link to={`${video.id.videoId}`}>
                    <img src={`${video.snippet.thumbnails.default.url}`}></img>
                </Link>
             ))}

        </div>    
    )
        
}

export default Search;