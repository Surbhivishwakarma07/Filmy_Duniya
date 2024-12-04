import React from 'react';
import Props from "./Props";
import Data1 from './Data1';
// import Data2 from "./Data2";
import { useNavigate } from 'react-router-dom';

const Ott=()=>{
 return(<React.Fragment> {Data1.map((r)=> {return (
    <Props
    img={r.img}
    title={r.title}
    Name={r.Name}
    link={r.link}
    />
  )})}</React.Fragment>)

}
const Movies=()=>
{
    const navigate=useNavigate();
    const navTo=(url)=>{
        navigate(url)
        // let rzi=false
        // if (rzi)
        // {
        //     navigate('/service')
        // }
        // else{
        //     navigate('/student')
        // }
    }
   return( <React.Fragment>
  <Ott/>
     </React.Fragment>)
}

export default Movies;
