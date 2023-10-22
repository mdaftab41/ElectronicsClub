import React from "react";
import Cards from "./Cards1";
 
function Gcomp(Cimage) {
  
  return (
    <div  >
      <Cards   
        name={Cimage.name}
        img1={Cimage.img1URL}
        img2={Cimage.img2URL}
        img3={Cimage.img3URL}
      />
    </div>
  );
}
export default Gcomp;
