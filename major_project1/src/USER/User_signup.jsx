import React,{useState,useEffect} from 'react'
import Signup from '../api/Signup'
import { adduser } from '../api/userService'
import { useNavigate } from 'react-router-dom'
const User_signup = () => {
  const navigate=useNavigate();
    const [user_data, update_user_data] = useState([]);
    const [name,updatename]=useState("")
    const [email,updateemail]=useState("")
    const [password,updatepassword]=useState("")

    
    const user_data1=JSON.parse(localStorage.getItem("user_data"))
    console.log(user_data1)
    const adddata=async(e)=>{
      e.preventDefault()
    const data=user_data1.find((i)=>i.email===email)
    if(data){
      alert("exist")
    }
    else{
      const newuser = { name, email, password };
                  const adduser1 = await adduser(newuser);
                  update_user_data((prev) => [...prev, adduser1]);
                  updatename("");
                  updateemail("");
                  updatepassword("");
                  // navigate(`/login/${email}`)
                  navigate("/login")

    }
    }
      return (
        <>
        <div className="sign_top">
        <div className="user_boss">
        <h1 className='user-h1'>Signup here</h1>
      <form action="" className='user-form'>
        <input className='user-input' type="text" value={name} onChange={(e)=>updatename(e.target.value)}  placeholder='Enter Your Name'/> <br />
        <input className='user-input' type="text" value={email} onChange={(e)=>updateemail(e.target.value)} placeholder='Enter Your Email'/> <br />

        <input className='user-input' type="text"  value={password} onChange={(e)=>updatepassword(e.target.value)}placeholder='Enter Your Password'/> <br />
        <button className='user-btn' onClick={adddata}>signup</button><br></br><br />
        <p className='user-para'>if you are allredy registerd or signup so go to <span className='user-span'>login</span></p>
        </form>
      </div>
        </div>
        

        </>
      )
      
    }
   



export default User_signup
