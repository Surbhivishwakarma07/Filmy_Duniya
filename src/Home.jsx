
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css';


const Home=()=>{
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
        <div className='home-img'>
           <div className='home'> <a href="https://www.hotstar.com/in/home?ref=%2Fin"><img src="https://wallpapercave.com/wp/wp10139564.jpg" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://www.jiocinema.com/"><img src="https://cinebuds.com/wp-content/uploads/2023/05/Upcoming-Movies-on-Jio-Cinema-Jio-Cinema-Movies-List.jpg" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_16_mkw_symCJqBmk-dc?gclid=Cj0KCQjwgNanBhDUARIsAAeIcAuwqaEQBnKaAQeI4jZ-XubZbMR9URL0BV8qyu_vMUptU7M2COvJBgUaAmH1EALw_wcB&mrntrk=pcrid_657901934582_slid__pgrid_84577172528_pgeo_9299866_x__adext__ptid_kwd-339065342343"><img src="https://www.91-cdn.com/hub/wp-content/uploads/2021/06/Amazon-Prime-video-plans.jpg" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_16_mkw_symCJqBmk-dc?gclid=Cj0KCQjwgNanBhDUARIsAAeIcAuwqaEQBnKaAQeI4jZ-XubZbMR9URL0BV8qyu_vMUptU7M2COvJBgUaAmH1EALw_wcB&mrntrk=pcrid_657901934582_slid__pgrid_84577172528_pgeo_9299866_x__adext__ptid_kwd-339065342343"><img src="data:image/jpeg;base64,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" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://www.netflix.com/in/"> <img src="https://img.hi.91mobiles.com/uploads/2022/04/Netflix-Plan-list.jpg" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://help.jiocinema.com/categories/switching-from-voot-to-jiocinema/6446710ad2f7cb4240baa5b4"> <img src="https://i.gadgets360cdn.com/large/voot-select-logo_1579595846623.jpg" alt="" className='imgd'/></a></div>
           <div className='home'> <a href="https://www.sonyliv.com/subscription?utm_source=google&utm_medium=paid&utm_campaign=IN_MSixSonyLIV_NA_Performance_AlwaysON_Brand_Launch_Search_Subscriptions_India_Apr_2022_V0&utm_content=Brand&gclid=Cj0KCQjwgNanBhDUARIsAAeIcAuYCM2AYXws68XcqYJh3TEnnwcH5fyUBtez7qRA9t_rEosiksMkWvEaAq3aEALw_wcB"> <img src="https://assets.mspimages.in/gear/wp-content/uploads/2021/09/sony-liv.jpg" alt="" className='imgd'/></a></div>
<div className='home'> <a href="https://www.hotstar.com/in/home?ref=%2Fin"> <img src="https://www.adgully.com/img/800/201906/zee5.jpg" alt="" className='imgd'/></a></div>
<div className='home'> <a href="https://www.hotstar.com/in/home?ref=%2Fin"> <img src="https://imgeng.jagran.com/images/2022/jan/27_01_2022-tata-play_224151451643459495165.jpg" alt="" className='imgd'/></a></div>
        </div>
        </React.Fragment>
    )
}

export default Home;