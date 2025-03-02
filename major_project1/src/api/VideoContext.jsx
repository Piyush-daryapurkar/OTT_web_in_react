import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Action Movie",
      category: "Home",
      thumbnail: "main-slider1.webp",
      url: "https://res.cloudinary.com/dennsgomu/video/upload/v1739125804/001-Learn_Django_with_Dominic_Vacchiano_jgjwnt.mp4",
    },
    {
      id: 2,
      title: "Sports Highlight",
      category: "Sports",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    }, 
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    

    {
      id: 4,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "main-slider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },




    {
      id: 11,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 12,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 13,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 14,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 14,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 15,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 16,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider7.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 17,
      title: "Comedy Show",
      category: "Home1",
      thumbnail: "sslider8.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },






  ]);

  return (
    <VideoContext.Provider value={{ videos, setVideos }}>
      {children}
    </VideoContext.Provider>
  );
};

export const useVideo = () => {
  return useContext(VideoContext);
};
