import React, { useEffect } from "react";
import Meta from "./Meta"

const Home = () => {
  useEffect(() => {
    document.getElementById("title")?.remove();
    document.getElementById("description")?.remove();
    document.getElementById("image")?.remove();
  }, []);
  return (
  <div>
    <Meta 
      title="Home | My React App"
      description="Welcome to the home page of my React App."
      image="https://react-helmet-one.vercel.app/home-image.png"
      url="https://react-helmet-one.vercel.app/"
    />
    <h1>Home Page</h1>
  </div>
)
}

export default Home;

// import React, { useEffect } from "react";

// const Home = () => {
//   useEffect(() => {
//     document.getElementById("title")?.setAttribute("content", "Home | My React App");
//     document.getElementById("description")?.setAttribute("content", "Welcome to the homepage of My React App.");
//     document.getElementById("image")?.setAttribute("content", "https://react-helmet-one.vercel.app/home-image.png");
//     document.title = "Home | My React App";
//   }, []);

//   return (
//     <div>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

// export default Home;

