// import React from "react";
// import { BrowserRouter as Router, Route, NavLink, Routes } from "react-router-dom";
// import Home from "./components/Home";
// import About from "./components/About";
// import Contact from "./components/Contact";
// import { Helmet } from "react-helmet";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <NavLink to="/">Home</NavLink>
//             </li>
//             <li>
//               <NavLink to="/about">About</NavLink>
//             </li>
//             <li>
//               <NavLink to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route
//             path="/"
//             element={
//               <div>
//                 <Helmet>
//                   <title>Demo App - Home</title>
//                   <meta name="description" content="This is the home page of Demo App" />
//                   <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbo3mE0i7omiwBGhyhExFTTq9Bnv9YZ6W9ag&s" />
//                 </Helmet>
//                 <Home />
//               </div>
//             }
//           />
//           <Route
//             path="/about"
//             element={
//               <div>
//                 <Helmet>
//                   <title>Demo App - About</title>
//                   <meta name="description" content="This is the about page of Demo App" />
//                   <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitRR1YjtF86dsqjrS6mlhXp14y7R9Nk9LeQ&s" />
//                 </Helmet>
//                 <About />
//               </div>
//             }
//           />
//           <Route
//             path="/contact"
//             element={
//               <div>
//                 <Helmet>
//                   <title>Demo App - Contact</title>
//                   <meta name="description" content="This is the contact page of Demo App" />
//                   <link rel="icon" href="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt3UtZX_rk0slCVjswq6dIS9aY-GDixb_hg&s" />
//                 </Helmet>
//                 <Contact />
//               </div>
//             }
//           />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;

import React from "react";
import { Route, NavLink, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
