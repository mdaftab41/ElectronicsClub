import React from "react";
import Avtar2 from "./Avtar2";

function Cards2(props) {
  return (
    <div className="top">
      <p>{props.id}</p>
      <h2 className="name-c">{props.name}</h2>
      <div className="circle-im"> 
      <Avtar2 img1={props.img1} img2={props.img2} img3={props.img3} />
      </div>
    </div>
  );
}
export default Cards2;
