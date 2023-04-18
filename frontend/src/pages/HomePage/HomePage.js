import React, { useReducer } from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Search from "../../components/Search/Search";
import { useNavigate, Link, Routes, Route } from "react-router-dom";
import '../../components/Videos/Videos.css';
import axios from "axios";

const HomePage = () => {
  const [videos, setVideos] = useState([])
  useEffect(async () => {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?relatedToVideoId=il3TSLI7Aqg&type=video&key=AIzaSyBtCSiUHpyDxaFxJ5sA5kPcCeH-4udJkTU&part=snippet`
      )
      const {items} = response.data
      setVideos(items)
  },[])
  
  return (
    <>
      <Search />
      <div class='video-player'>
        {videos.map((video) => (
          <Link to={`${video.id.videoId}`}>
            <img src={`${video.snippet.thumbnails.default.url}`} style={{width: 250, height: 160, padding: 10}} ></img>
          </Link>
        ))}
      </div>
    </>
  )



};

export default HomePage;
// The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
// The "token" value is the JWT token that you will send in the header of any request requiring authentication
//TODO: Add an AddCars Page to add a car for a logged in user's garage
// const [cars, setCars] = useState([]);

// useEffect(() => {
//   const fetchCars = async () => {
//     try {
//       let response = await axios.get("http://127.0.0.1:8000/api/cars/", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       });
//       setCars(response.data);
//     } catch (error) {
//       console.log(error.response.data);
//     }
//   };
//   fetchCars();
// }, [token]);
// return (
//   <div className="container">
//     <h1>Home Page for {user.username}!</h1>
//     {cars &&
//       cars.map((car) => (
//         <p key={car.id}>
//           {car.year} {car.model} {car.make}
//         </p>
//       ))}
//   </div>
// );
