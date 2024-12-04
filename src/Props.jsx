import React from "react";

function Props(Props){
    return (
        <div className="MainCard">
            <div className="Innercard">
              <img src={Props.img} alt="" className="Img"/>
           
                <div className="CardInfo">
                    <span className="info">
                        {Props.title}
                    </span>
                    <h3 className="Name">
                     {Props.Name}
                    </h3>
                    <a href={Props.link} target="_blank">
                    <button className="see">See</button>
                    </a>

                </div>
            </div>
           
       
        </div>
    )
}
export default Props;