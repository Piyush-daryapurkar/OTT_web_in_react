import { useState } from 'react';
import Admin from './Admin';
import User_signup from './USER/User_signup';
import Nav from './Nav';
import Useredit from './Useredit';
import Login from './USER/Login';
import User_profile from './USER/User_profile';
import Home from './Home';
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

        </Routes>
      </Router>
    </>
  );
}

export default App;
