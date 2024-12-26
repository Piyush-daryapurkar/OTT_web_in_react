import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../css/user_signup.css'

const User_profile = () => {
    const {user_email}=useParams()
    const [profile_data,updateprofiledata]=useState(null);
    useEffect(()=>{
        const data=JSON.parse(localStorage.getItem("user_data"))
        console.log(data)
        const data1=data.find((i)=>i.email===user_email);
        updateprofiledata(data1);
    },[user_email])
    console.log(profile_data.name);
  return (
    <div>

        <h1>Your profile</h1>
        <h2>{profile_data.name}</h2>
        <h3>{profile_data.email}</h3>
        <h4>{profile_data.password}</h4>
      
    </div>
  )
}

export default User_profile
