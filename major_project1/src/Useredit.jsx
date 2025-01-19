import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { updateuser } from './api/userService';
import { useNavigate } from 'react-router-dom';
import "../src/css/useredit.css"

const Useredit = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [user_data, update_user_data] = useState({});
  const [name, updatename] = useState("");
  const [email, updateemail] = useState("");
  const [password, updatepassword] = useState("");
  const [error, setError] = useState(null);
  const [isUpdated, setIsUpdated] = useState(false);

  useEffect(() => {
    // Check if the user data exists in localStorage
    const data = JSON.parse(localStorage.getItem("user_data")) || [];
    const user = data.find((i) => i.id === id);
    if (user) {
      update_user_data(user);
      updatename(user.name);
      updateemail(user.email);
      updatepassword(user.password);
    } else {
      setError("User not found");
    }
  }, [id]);

  const edit = async (e) => {
    e.preventDefault();
    if (name && email && password) {
      const updatedUser = { name, email, password };
      try {
        await updateuser(id, updatedUser);
        setIsUpdated(true);
        navigate("/admin");
      } catch (err) {
        setError("Failed to update user");
      }
    } else {
      setError("All fields must be filled");
    }
  };

  return (
    <div className="useredit-boss">
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={edit} className='useredit-form'>
        {/* <label>Name</label> */}
        <input
        className='useredit-input'
          type="text"
          value={name}
          onChange={(e) => updatename(e.target.value)}
          required
        /> <br />
        
        {/* <label>Email</label> */}
        <input
        className='useredit-input'
          type="email"
          value={email}
          onChange={(e) => updateemail(e.target.value)}
          required
        /> <br />
        
        {/* <label>Password</label> */}
        <input
        className='useredit-input'
          type="password"
          value={password}
          onChange={(e) => updatepassword(e.target.value)}
          required
        /> <br />

        <button type="submit" disabled={isUpdated || !name || !email || !password} className='useredit-btn'>
          Update
        </button>
      </form>
      
    </div>
  );
};

export default Useredit;
