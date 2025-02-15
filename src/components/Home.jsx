// import React from "react";
// import Meta from "./Meta"

// const Home = () => (
//   <div>
//     <Meta 
//       title="Home | My React App"
//       description="Welcome to the home page of my React App."
//       image="https://react-helmet-one.vercel.app/home-image.png"
//       url="https://react-helmet-one.vercel.app/"
//     />
//     <h1>Home Page</h1>
//   </div>
// );

// export default Home;

import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Welcome to the homepage of My React App.");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Home | My React App");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Explore our homepage and see what we offer.");
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", "https://react-helmet-one.vercel.app/home-image.png");
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
