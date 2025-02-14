import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Meta from "./components/Meta";

const App = () => {
  return (
    <HelmetProvider>
      <Router>
      <Meta/>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
         
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
};

export default App;
