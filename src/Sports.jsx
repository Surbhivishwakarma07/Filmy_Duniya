import React from 'react';
import Props2 from "./Props2";
import Data2 from './Data2';
import Data3 from './Data3';
import './index3.css'

import { useNavigate } from 'react-router-dom';


const Ott=()=>{
    return(<React.Fragment> {Data2.map((r)=> {return (
        <Props2
        img={r.img}
        />
      )})}</React.Fragment>
      )
};
const Ott2=()=>{
    return(<React.Fragment> {Data3.map((r)=> {return (
        <Props2
        img={r.img}
        />
      )})}</React.Fragment>
      )
};

const Sports=()=>
{
    const navigate=useNavigate();
    const navTo=(url)=>{
        navigate(url)
      
    }
   return( <React.Fragment>
   
  <Ott/>
   <div> <a href="https://www.hotstar.com/in/home?ref=%2Fin"><img src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/neeraj_chopra_14x3_today-1692901829738.jpg?imformat=chrome" className='sp' alt="" /></a></div>
   <h2>Key Tournaments</h2>
   <Ott2/>
   <div> <a href="https://www.hotstar.com/in/home?ref=%2Fin"><img src="https://v3img.voot.com/resizeMedium,w_1920,h_411/v3Storage/assets/evening_session_athletes_banner_14x3-1692946203022.jpg?imformat=chrome" className='sp' alt="" /></a></div>
     </React.Fragment>)
}

export default Sports;
