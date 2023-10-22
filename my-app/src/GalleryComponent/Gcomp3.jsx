import React from "react";
import Cards3 from "./Cards3";
function Gcomp3(Cimage3) {
  return (
    <div>
      <Cards3
        name={Cimage3.name}
        img1={Cimage3.img1URL}
        img2={Cimage3.img2URL}
        img3={Cimage3.img3URL}
      />
    </div>
  );
}
export default Gcomp3;
