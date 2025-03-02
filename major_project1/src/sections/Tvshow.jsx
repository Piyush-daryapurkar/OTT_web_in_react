import React, { useState,useEffect } from "react";
import { useVideo } from "../api/VideoContext";
import '../css/home.css'

const Tvshow = () => {
   const { videos } = useVideo();
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playingVideo, setPlayingVideo] = useState(null);
  
    const filteredVideos = videos.filter((video) => video.category === "Home");
  
    // Auto-slide every 4 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        handleNextSlide();
      }, 4000);
      return () => clearInterval(interval);
    }, [currentIndex]);
  
    const handleNextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === filteredVideos.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const handlePrevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? filteredVideos.length - 1 : prevIndex - 1
      );
    };
  
  return (
    <div>
      {/* <h2>Home Section</h2> */}



    <div className="home-container">
      {/* <h2 className="home-title">Home Section</h2> */}
      <div className="slider-wrapper">
        <button className="slider-button prev-button" onClick={handlePrevSlide}>&#10094;</button>
        <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {filteredVideos.map((video) => (
            <div key={video.id} className="slider-item">
              {/* <h3 className="video-title">{video.title}</h3> */}
              {playingVideo === video.id ? (
                <video className="video-player" controls autoPlay>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  className="video-thumbnail"
                  src={video.thumbnail}
                  // alt={video.title}
                  onClick={() => setPlayingVideo(video.id)}
                />
              )}
            </div>
          ))}
        </div>
        <button className="slider-button next-button" onClick={handleNextSlide}>&#10095;</button>
      </div>
    </div>




      <div className="video-slider">
        {
        videos.filter((video) => video.category === "Home1")
          .map((video) => (
            <div key={video.id} className="video-box">
              {/* <h3>{video.title}</h3> */}
              {playingVideo === video.id ? (
                <video width="100%" height="100%" controls autoPlay>
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={video.thumbnail}
                  // alt={video.title}
                  width="100%"
                  height="96%"
                  onClick={() => setPlayingVideo(video.id)}
                  style={{ cursor: "pointer", borderRadius: "10px" }}
                /> 
              )}
            </div>
          ))}
      </div>
      
      <div className="homebox-container">
      {/* <h2 className="homebox-title">Home Section</h2> */}
      
      <div className="homebox-grid">
        {videos
          .filter((video) => video.category === "Home")
          .map((video) => (
            <div key={video.id} className="homebox">
              <h3 className="homebox-video-title">{video.title}</h3>
              {playingVideo === video.id ? (
                <video width="100%" height="100%" controls autoPlay className="homebox-video-player">
                  <source src={video.url} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="homebox-thumbnail"
                  onClick={() => setPlayingVideo(video.id)}
                />
              )}
            </div>
          ))}
      </div>
    </div>
    </div>
    
  )
}

export default Tvshow
