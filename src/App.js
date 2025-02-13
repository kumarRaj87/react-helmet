// import React from "react";
// import { Route, NavLink, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// function App() {
//   return (
//     <div>
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           <li>
//             <NavLink to="/about">About</NavLink>
//           </li>
//           <li>
//             <NavLink to="/contact">Contact</NavLink>
//           </li>
//         </ul>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;


// First, install required packages:
// npm install react-helmet-async react-router-dom

import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// Meta component to handle head modifications
const Meta = ({ title, description, image, url }) => {
  // Get the current URL if not provided
  const currentUrl = url || window.location.href;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={image} />
      
      {/* Microsoft Teams Meta Tags */}
      <meta name="ms.prod" content="Microsoft Teams" />
      <meta name="ms.sitename" content={title} />
      <meta name="og:card" content="summary_large_image" />
      <meta name="msapplication-TileImage" content={image} />
      <meta name="msapplication-TileColor" content="#2B5797" />
      
      {/* Open Graph Meta Tags (Teams uses these) */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      
      {/* Additional image meta tags for better Teams preview */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={description} />
      
      {/* Twitter Card Meta Tags (Teams may fall back to these) */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

// Example pages with different meta data
const Home = () => (
  <div>
    <Meta 
      title="Home | My React App"
      description="Welcome to my React application's homepage"
      image="/home.png"
      url="https://react-helmet-one.vercel.app/"
    />
    <h1>Home Page</h1>
  </div>
);

const About = () => (
  <div>
    <Meta 
      title="About Us | My React App"
      description="Learn more about our company and team"
      image="/about.png"
      url="https://react-helmet-one.vercel.app/about"
    />
    <h1>About Page</h1>
  </div>
);

const Contact = () => (
  <div>
    <Meta 
      title="Contact | My React App"
      description="Get in touch with us"
      image="/contact.png"
      url="https://react-helmet-one.vercel.app/contact"
    />
    <h1>Contact Page</h1>
  </div>
);

// Main App component
const App = () => {
  return (
    <HelmetProvider>
      <BrowserRouter>
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
      </BrowserRouter>
    </HelmetProvider>
  );
};

export default App;