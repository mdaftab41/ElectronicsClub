import React from "react";

function Avtar(props){
    return (<div> 
        <img
    className="circle-img"
      src={props.img1}
      alt="avatar_img"
    />
    <img
    className="circle-img"
      src={props.img2}
      alt="avatar_img"
    />
    <img
    className="circle-img"
      src={props.img3}
      alt="avatar_img"
    />
    
     
    </div>);
}
export default Avtar;