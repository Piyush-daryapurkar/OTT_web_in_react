import { useState } from 'react';
import Admin from './Admin';
import Footer from './USER/Footer';
import User_signup from './USER/User_signup';
import Nav from './Nav';
import Useredit from './Useredit';
import Sports from './sections/Sports';
import Movie from './sections/Movie';
import News from './sections/News';
import Tvshow from './sections/Tvshow';
import Login from './USER/Login';
import User_profile from './USER/User_profile';
import Home from './sections/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<User_signup />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/useredit/:id" element={<Useredit />} />
          <Route path="/login" element={<Login />} />
          <Route path='/profile/:user_email' element={<User_profile/>}></Route>
          <Route path="/sports" element={<Sports />} />
          <Route path="/news" element={<News />} />
          <Route path="/tvshow" element={<Tvshow />} />
          <Route path="/movie" element={<Movie />} />







        </Routes>

        <Footer/>

      </Router>
      
    </>
  );
}

export default App;