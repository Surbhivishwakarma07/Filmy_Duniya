
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';
import './index2.css'

const Myspace=()=>{
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
    return(
        <React.Fragment>
        <h1 className='head'>Login to Disney + Hotstar</h1>
        <p className='para'>Start watching from where you left off, prsonalise for kids and more</p>
        <button className='b1' >Log In </button>
        </React.Fragment>
    )
}

export default Myspace;