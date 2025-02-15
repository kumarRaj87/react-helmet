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


// import React from "react";
// import { Helmet } from "react-helmet";

// const Home = () => {
//   return (
//     <>
//       <Helmet>
//         <title>Home | My React App</title>
//         <meta name="description" content="Welcome to the home page of my React App." />
//         <meta property="og:title" content="Home | My React App" />
//         <meta property="og:description" content="Welcome to the home page of my React App." />
//         <meta property="og:image" content="https://react-helmet-one.vercel.app/home-image.png" />
//         <meta property="og:url" content="https://react-helmet-one.vercel.app/" />
//       </Helmet>

//       <div>
//         <h1>Home Page</h1>
//       </div>
//     </>
//   );
// };

// export default Home;

// import React from "react";
// import { HelmetWrapper } from "./AppLayout";

// const Home = () => {
//   return (
//     <>
//       <HelmetWrapper
//         title="Home | My React App"
//         description="Welcome to the home page of my React App."
//         image="https://react-helmet-one.vercel.app/home-image.png"
//         url="https://react-helmet-one.vercel.app/"
//       />

//       <div>
//         <h1>Home Page</h1>
//       </div>
//     </>
//   );
// };

// export default Home;