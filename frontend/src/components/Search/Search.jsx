import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './Search.css'

const Search = () => {

    const [videos, setVideos] = useState('')

    async function getVideos() {
        const response = await axios.get();
        setVideos(response.data)
    }

    const [search, setSearch] = useState('')

    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    return (
        <div class='search-field'>
            <label for='site-search' onChange={(event) => handleSearchChange(event)}> Search for Videos </label>
            <input type='search' id='site-search' name='q'></input>
            <button> Search</button>
        </div>    
    )
        
}

export default Search;