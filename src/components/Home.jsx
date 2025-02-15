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

import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>Home - My React App</title>
        <meta name="description" content="This is the home page of my React app!" />
        <meta property="og:title" content="Home - My React App" />
        <meta property="og:description" content="This is the home page of my React app!" />
        <meta property="og:url" content="https://react-helmet-one.vercel.app/" />
      </Helmet>
      <h1>Home Page</h1>
    </>
  );
};

export default Home;

