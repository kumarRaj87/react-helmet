// import React from "react";
// import Meta from "./Meta";

// const About = () => (
//   <div>
//     <Meta 
//       title="About Us | My React App"
//       description="Learn more about us on this page."
//       image="https://react-helmet-one.vercel.app/about-image.png"
//       url="https://react-helmet-one.vercel.app/about"
//     />
//     <h1>About Page</h1>
//   </div>
// );

// export default About;

import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - My React App</title>
        <meta name="description" content="Learn more about our React app!" />
        <meta property="og:title" content="About Us - My React App" />
        <meta property="og:description" content="Learn more about our React app!" />
        <meta property="og:url" content="https://react-helmet-one.vercel.app/about" />
      </Helmet>
      <h1>About Page</h1>
    </>
  );
};

export default About;
