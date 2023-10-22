import React, { useRef, useState, useEffect } from "react";
import { Zoom } from "react-reveal";
import { useInView } from "react-intersection-observer";

function Avtar3(props) {
  const [zoomLevel, setZoomLevel] = useState(1);
  const [inViewRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      const newZoomLevel = 1 + scrollY * -0.002; // Adjust the zoom speed here
      setZoomLevel(newZoomLevel < 1 ? 1 : newZoomLevel);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div ref={inViewRef}>
        <Zoom zoom={zoomLevel}>
          <img className="circle-img" src={props.img1} alt="avatar_img" />
          <img className="circle-img" src={props.img2} alt="avatar_img" />
          <img className="circle-img" src={props.img3} alt="avatar_img" />
        </Zoom>
      </div>
    </div>
  );
}

export default Avtar3;


// import React from "react";

// import Zoom from "react-reveal/Zoom";
// function Avtar3(props) {
//   return (
//     <div>
//       <Zoom>
//         <img className="circle-img" src={props.img1} alt="avatar_img" />
//         <img className="circle-img" src={props.img2} alt="avatar_img" />
//         <img className="circle-img" src={props.img3} alt="avatar_img" />
//       </Zoom>
//     </div>
//   );
// }
// export default Avtar3;
 