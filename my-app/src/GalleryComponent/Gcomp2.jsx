import React from "react";
import Cards2 from "./Cards2";
function Gcomp2(Cimage2) {
  return (
    <div>
      <Cards2
        name={Cimage2.name}
        img1={Cimage2.img1URL}
        img2={Cimage2.img2URL}
        img3={Cimage2.img3URL}
      />
    </div>
  );
}
export default Gcomp2;
