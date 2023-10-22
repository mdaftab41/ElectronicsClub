import React from "react";
import Avtar3 from "./Avtar3";
 
function Cards(props) {
  
  return (
    <div className="top" >
      <p>{props.id}</p>
      <h2 className="name-c">{props.name}</h2>
      <div className="circle-im"> 
      <Avtar3 img1={props.img1} img2={props.img2} img3={props.img3} />
      </div>
    </div>
  );
}
export default Cards;
