import React from "react";
import Header from "./Component/Header";
import Home from "./Component/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Component/Contact";
import Gallery from "./GalleryComponent/Gallery1";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
