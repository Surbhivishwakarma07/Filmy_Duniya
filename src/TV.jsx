import React from 'react';
import Props_tv from "./Props_tv";
import Data5 from './Data5';
import './index3.css'

import { useNavigate } from 'react-router-dom';

const Ott=()=>{
 return(<React.Fragment> {Data5.map((r)=> {return (
    <Props_tv
    img={r.img}
   link={r.link}
    />
  )})}</React.Fragment>)

}
const TV=()=>
{
    const navigate=useNavigate();
    const navTo=(url)=>{
        navigate(url)
    
    }
   return( <React.Fragment>
   
  <Ott/>
   
   
     </React.Fragment>)
}

export default TV;
