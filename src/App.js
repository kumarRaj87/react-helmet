// import React from "react";
// import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
// import { HelmetProvider } from "react-helmet-async";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";

// const App = () => {
//   return (
//     <HelmetProvider>
//       <Router>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
         
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </Router>
//     </HelmetProvider>
//   );
// };

// export default App;

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const App = () => {
  const location = useLocation();
  const metaData = {
    "/": {
      title: "Home - My React App",
      description: "This is the home page of my React app!",
    },
    "/about": {
      title: "About Us - My React App",
      description: "Learn more about our React app!",
    },
  };

  const { title, description } = metaData[location.pathname] || metaData["/"];

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
      </Helmet>
      <h1>{title}</h1>
    </>
  );
};

export default App
