import React from 'react'
import { Link,NavLink } from 'react-router-dom'
import './css/Nav.css';
const Nav = () => {
    
  return (
    <>
    <nav>

        <div className="logo">
          <h1 id='logo'>Net <span id='logoSpan'>FLAX</span></h1>
        </div>
        <ul>
            <li>
                <Link to={'/home'}>Home</Link>

            </li>
            <li>
                <Link to={''}>TvShow</Link>
                
            </li>
        
            <li>
                <Link to={''}>Sports</Link>
                
            </li>
            <li>
                <Link to={''}>Movie</Link>
                
            </li>
            <li>
                <Link to={''}>Premium</Link>
                
            </li>
            <li>
                <Link to={''}>News</Link>
                
            </li>
         
      
            
        </ul>
        <div className="search">
          <input type="text" placeholder='Search Movies/Webseries&Others' />
        </div>
        <ul>
            {/* <li>
                <Link to={'/'}>signup</Link>

            </li>  */}
             {/* <li>
                <Link to={'/admin'}>admin</Link>
                
            </li> */}
            <li className='log'>
                <Link to={'/login'}>login/register</Link>
                
            </li>
            
        </ul>
    </nav>
    </>
  )
}

export default Nav
