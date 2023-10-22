import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { NavLink, Link} from 'react-router-dom';

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);
  
   
  
   

  return (
    <header className="bg-primary" >
      <a href="/" className="text-3xl font-bold logo text-accent ">
        Electronica
      </a>

      {/* Desktop Nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/Gallery" >Event</Link>
          </li>
           
          <li>
          <Link to="/Contact">Contact</Link>
          </li>
        </ul>
      </nav>
       
      {/* Mobile Nav */}
      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/project">Project</Link>
          </li>
          <li>
          <Link to="/Register">Register</Link>
          </li>
          <li>
          <Link to="/Contact">Contact</Link>
          </li>   
        </ul>
      </nav>

      {/* Toggle button */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={30} /> : <AiOutlineClose size={30} />}
      </button>
    </header>
  );
};

export default Header;