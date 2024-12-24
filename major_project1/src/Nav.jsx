import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './css/Nav.css';
const Nav = () => {
    
  return (
    <>
    <nav>

        <div className="logo">
          <img src="vite.svg" alt="img" />
        </div>
        <ul>
            <li>
                <Link to={'/'}>signup</Link>

            </li>
            <li>
                <Link to={'/admin'}>admin</Link>
                
            </li>
            <li>
                <Link to={'/login'}>login</Link>
                
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default Nav
