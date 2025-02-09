import React from "react";
import { useVideo } from "./api/VideoContext";
import './css/home.css'

const Home = () => {
  const { videos } = useVideo();

  return (
    <div>
      <h2>Home Section</h2>
      <div className="video-slider">
        {videos
          .filter((video) => video.category === "Home")
          .map((video) => (
            <div key={video.id} className="video-box">
              <h3>{video.title}</h3>
              <video width="320" height="240" controls>
                <source src={video.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;





// import React from 'react'
// import './css/home.css'

// const Home = () => {
//   return (
//     <>

//     <div className="div-main">
//     <div className="slider">
//     <div class="slides">
//       <input type="radio" name="radio-btn" id="radio1" checked/>
//       <input type="radio" name="radio-btn" id="radio2"/>
//       <input type="radio" name="radio-btn" id="radio3"/>
//       <input type="radio" name="radio-btn" id="radio4"/>

//       <div class="slide first">
//         <img src="slider1.webp" alt="Slide 1"/>
//       </div>
//       <div class="slide">
//       <img src="sslider2.webp" alt="" height="100%" width="100%" />      </div>
//       <div class="slide">
//         <img src="https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3" alt="Slide 3"/>
//       </div>
//       <div class="slide">
//         <img src="https://via.placeholder.com/800x400/FF33A1/FFFFFF?text=Slide+4" alt="Slide 4"/>
//       </div>

//       <div class="navigation-auto">
//         <div class="auto-btn1"></div>
//         <div class="auto-btn2"></div>
//         <div class="auto-btn3"></div>
//         <div class="auto-btn4"></div>
//       </div>
//     </div>

//     <div class="navigation-manual">
//       <label for="radio1" class="manual-btn"></label>
//       <label for="radio2" class="manual-btn"></label>
//       <label for="radio3" class="manual-btn"></label>
//       <label for="radio4" class="manual-btn"></label>
//     </div>

//     <div class="arrows">
//       <label for="radio4" class="arrow left">&#10094;</label>
//       <label for="radio2" class="arrow right">&#10095;</label>
//     </div>
//   </div>
//     </div>


 
//      <h1>trending near you </h1>

//     <div class="sslider">
//         <div className="box"><img src="sslider1.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider2.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider3.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider4.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider5.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider6.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider7.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider8.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider9.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider10.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider1.webp" alt="" height="100%" width="100%" /></div>
//         <div className="box"><img src="sslider1.webp" alt="" height="100%" width="100%" /></div>
//     </div>

//     </>
//   )
// }

// export default Home
