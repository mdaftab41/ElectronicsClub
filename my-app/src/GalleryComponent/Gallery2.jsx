import React from "react";
import Header from "../Component/Header";
import Cimage2 from "./Cimage2";
import Gcomp2 from "./Gcomp2";
function Gallery() {
  return (
    <div>
      <Header />
      {Cimage2.map(Gcomp2)}
    </div>
  );
}
export default Gallery;
