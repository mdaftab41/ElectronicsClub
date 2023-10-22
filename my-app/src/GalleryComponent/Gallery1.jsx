import React from "react";
import Header from "../Component/Header";
import Cimage from "./Cimage1";
import Gcomp from "./Gcomp1";
import Cimage2 from "./Cimage2";
import Gcomp2 from "./Gcomp2";
import Cimage3 from "./Cimage3";
import Gcomp3 from "./Gcomp3";
 
function Gallery() {
   
 
  return (
   <div >
      <Header />
     <div className="columns"  > 
      <div className="column column-reverse"> 
      {Cimage.map(Gcomp)}
      </div>
      <div className="column"  >
      {Cimage2.map(Gcomp2)}
    </div>
    <div className="column column-reverse"  >
      {Cimage3.map(Gcomp3)}
    </div>
    </div>
    </div>
    

 
 
  );
}
export default Gallery;
