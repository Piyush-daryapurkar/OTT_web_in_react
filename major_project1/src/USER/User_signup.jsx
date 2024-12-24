import React,{useState,useEffect} from 'react'
import Signup from './Signup'
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
        {email}
        <form action="">
        <input type="text" value={name} onChange={(e)=>updatename(e.target.value)} /> <br />
        <input type="text" value={email} onChange={(e)=>updateemail(e.target.value)}/> <br />

        <input type="text"  value={password} onChange={(e)=>updatepassword(e.target.value)}/> <br />
        <button onClick={adddata}>signup</button>
        </form>
        </>
      )
      
    }
   



export default User_signup
