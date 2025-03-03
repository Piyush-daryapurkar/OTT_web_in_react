import { createContext, useContext, useState } from "react";

const VideoContext = createContext();

export const VideoProvider = ({ children }) => {
  const [videos, setVideos] = useState([

    //main slider 
    {
      id: 1,
      title: "Action Movie",
      category: "HomeSlider",
      thumbnail: "main-slider1.webp",
      url: "https://res.cloudinary.com/dennsgomu/video/upload/v1739125804/001-Learn_Django_with_Dominic_Vacchiano_jgjwnt.mp4",
    },

    {
      id: 3,
      title: "Comedy Show",
      category: "HomeSlider",
      thumbnail: "main-slider2webp.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 4,
      title: "Comedy Show",
      category: "HomeSlider",
      thumbnail: "main-slider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    


   //second slider

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


    //third

    
    {
      id: 18,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 19,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 20,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 23,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 24,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 25,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider7.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 26,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider8.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 20,
      title: "Comedy Show",
      category: "home-grid",
      thumbnail: "sslider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //tv show 1st slider

    {
      id: 30,
      title: "TvShow",
      category: "Tv-slider",
      thumbnail: "tvMainSlider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 31,
      title: "Tv Show",
      category: "Tv-slider",
      thumbnail: "tvMainSlider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 32,
      title: "Tv Show",
      category: "Tv-slider",
      thumbnail: "tvMainSlider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 33,
      title: "Tv Show",
      category: "Tv-slider",
      thumbnail: "tvMainSlider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 34,
      title: "Tv Show",
      category: "Tv-slider",
      thumbnail: "tvMainSlider5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 35,
      title: "Tv Show",
      category: "Tv-slider",
      thumbnail: "tvMainSlider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //tv-show second

    {
      id: 41,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 42,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 43,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 45,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 46,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 47,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder7.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 48,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder8.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 49,
      title: "Tv Show",
      category: "Tv-slider2",
      thumbnail: "tvssilder9.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //third slider

    {
      id: 60,
      title: "TvShow",
      category: "Tv-grid",
      thumbnail: "tvMainSlider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 61,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvMainSlider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 62,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvMainSlider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 63,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvMainSlider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 64,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvMainSlider5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 65,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvMainSlider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 66,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvssilder6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 67,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvssilder7.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 68,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvssilder8.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 69,
      title: "Tv Show",
      category: "Tv-grid",
      thumbnail: "tvssilder9.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //sports slider main

    {
      id: 80,
      title: "sports",
      category: "sports-slider",
      thumbnail: "sportsSlider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    }, 
    {
      id: 81,
      title: "sports",
      category: "sports-slider",
      thumbnail: "sportsSlider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    
    {
      id: 83,
      title: "sports",
      category: "sports-slider",
      thumbnail: "sportsSlider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    
    {
      id: 84,
      title: "sports",
      category: "sports-slider",
      thumbnail: "sportsSlider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //second sports slider

    {
      id: 90,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 91,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 92,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 93,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 94,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider5.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 95,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider6.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 96,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider7.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 97,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider8.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 98,
      title: "sports",
      category: "sports-slider2",
      thumbnail: "sports2Slider9.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    //third slider

    {
      id: 100,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sportsSlider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    }, 
    {
      id: 101,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sportsSlider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    
    {
      id: 102,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sportsSlider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    
    {
      id: 103,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sportsSlider4.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },


    {
      id: 104,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sports2Slider1.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 105,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sports2Slider2.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 106,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sports2Slider3.webp",
      url: "https://www.w3schools.com/html/mov_bbb.mp4",
    },

    {
      id: 107,
      title: "sports",
      category: "sports-grid",
      thumbnail: "sports2Slider4.webp",
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
