import "./App.css";
import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Deshboard from "./Deshboard";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="sidenav">
        <Link to="/deshboard">Deshboard</Link>
        <br />
        <Link to="/about">About</Link>
        <br/>
        <Link to="/contact">Contact Us</Link>
      </div>
      <div className="main">
        <Routes>
          <Route
            path="/deshboard"
            element={<Deshboard name="Gajendra" number="9876543211" />}
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;
