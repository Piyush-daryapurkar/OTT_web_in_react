import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([
    {
      id: 1,
      title: "Action Movie",
      category: "Home",
      thumbnail: "sslider4.webp",
      url: "https://res.cloudinary.com/dennsgomu/video/upload/v1739125804/001-Learn_Django_with_Dominic_Vacchiano_jgjwnt.mp4",
    },
    {
      id: 2,
      title: "Sports Highlight",
      category: "Sports",
      thumbnail: "batman.jpg",
      url: "https://www.w3schools.com/html/movie.mp4",
    },
    {
      id: 3,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 5,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 6,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 7,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 8,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 9,
      title: "Comedy Show",
      category: "Home",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
    id: 9,
    title: "Comedy Show",
    category: "Home",
    thumbnail: "sslider6.webp",
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
