import React from "react";

function Props_tv(Props){
    return (
        <div className="MainCard2">
            <div className="Innercard2">
            <a href={Props.link} target="_blank"> <img src={Props.img} alt="" className="Img2"/>
              </a>
            </div>
       
        </div>
    )
}
export default Props_tv;