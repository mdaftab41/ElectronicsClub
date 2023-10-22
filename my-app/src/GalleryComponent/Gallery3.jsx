import React from "react";
import Header from "../Component/Header";
import Cimage3 from "./Cimage3";
import Gcomp3 from "./Gcomp3";
function Gallery() {
  return (
    <div>
      <Header />
      {Cimage3.map(Gcomp3)}
    </div>
  );
}
export default Gallery;
