import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getuser } from '../api/userService';
import { useNavigate } from 'react-router-dom';
import '../css/login.css'

const Login = () => {
  const navigate=useNavigate();
  //const { email1 } = useParams();
  const [user_data, update_user_data] = useState([]);
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");
  const [error, setError] = useState(""); 

  useEffect(() => {
    const fetchuser = async () => {
      try {
        const data = await getuser();
        update_user_data(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchuser();
  }, []);

  const user_login = (e) => {
    e.preventDefault(); 


    const user = user_data.find(i => i.email === email);
    if (user) {
      if (user.password === password) {
        // navigate(`/user_profile/${email}`)
        navigate('/home')
        
      } else {
        setError("Invalid password");
      }
    } else {
      setError("Invalid email");
    }
  };

  return (
    <>
    <div className="log-main">
    <div className="login-boss">
     <h1 className='login-h1'>Login Here</h1>
      <form className='login-form' onSubmit={user_login}>
        <div>
          {/* <label>Email: </label> */}
          <input 
            className='login-input'
            type="email"
            value={email}
            onChange={(e) => updateemail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div>
          {/* <label>Password: </label> */}
          <input
           className='login-input'
            type="password"
            value={password}
            onChange={(e) => updatepassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error */}
        <button className='login-btn' type="submit">Login</button>
      </form>
     </div>
    </div>
    </>
  );
};

export default Login;
