 

 
import React, { useRef, useEffect, useState } from "react";
import "./animations.css"; // Import the CSS file

function Avtar2(props) {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

   
  useEffect(() => {
    const handleScroll = () => {
      if (ref1.current && ref2.current && ref3.current) {
        const rect1 = ref1.current.getBoundingClientRect();
        const rect2 = ref2.current.getBoundingClientRect();
        const rect3 = ref3.current.getBoundingClientRect();
  
        setIsVisible1(rect1.bottom >= -30 && rect1.top <= window.innerHeight+100);
        setIsVisible2(rect2.bottom >= -30 && rect2.top <= window.innerHeight+100);
        setIsVisible3(rect3.bottom >= -30 && rect3.top <= window.innerHeight+100);
      }
    };
  
    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    // Remove event listener on cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  
  return (
    <div>
      <div ref={ref1} className={isVisible1 ? "zoom-in" : "fade-Out"}>
        <img className="circle-img" style={{ animationDuration: "1s" }} src={props.img1} alt="avatar_img" />
      </div>
      <div ref={ref2} className={isVisible2 ? " zoom-in" : "fade-Out"}>
        <img className="circle-img" style={{ animationDuration: "3s" }} src={props.img2} alt="avatar_img" />
      </div>
      <div ref={ref3} className={isVisible3 ? " zoom-in" : "fade-Out"}>
        <img className="circle-img" style={{ animationDuration: "5s" }} src={props.img3} alt="avatar_img" />
      </div>
    </div>
  );
}

export default Avtar2;
