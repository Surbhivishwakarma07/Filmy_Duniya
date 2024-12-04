import React from 'react';
import {NavLink  } from 'react-router-dom';
import './index.css';

const Navigation=()=>
{
    return(
        <React.Fragment>
    
        <div className='hh'><h1 >
     𝔽𝕀ᒪмⓎ ᗪ𝓊ภ𝕀Ⓨ𝐚 
  </h1>
  </div> 
 
  <div className='imain'> 
  <nav>
  <ul>
  <li><NavLink className="deco" to={"/home"}><span class="fa-solid fa-house"> Home</span></NavLink></li>
  <li><NavLink className="deco" to={"/myspace"}><span class="fa-solid fa-circle-user">  My Space</span></NavLink></li>
   <li><NavLink className="deco" to={"/"}><span class="fa-solid fa-clapperboard">  Movies</span></NavLink></li>
  <li><NavLink className="deco" to={"/sports"}> <span class="fa-solid fa-baseball"> Sports</span></NavLink></li>
  
  <li><NavLink className="deco" to={"/tv"}><span class="fa-solid fa-television">  TV</span></NavLink></li>
 
  
  </ul>
  </nav>
  </div>




        </React.Fragment>

    )
}
 export default Navigation;