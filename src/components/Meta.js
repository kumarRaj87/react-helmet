// import React from "react";
// import { Helmet } from "react-helmet-async";

// const Meta = ({ title, description, image, url }) => {
//   const currentUrl = url || window.location.href;
//   const imageUrl = `https://react-helmet-one.vercel.app/${image}`;

//   return (
//     <Helmet>
//       <title>{title}</title>
//       <meta name="description" content={description} />

//       {/* Open Graph Meta Tags */}
//       <meta property="og:type" content="website" />
//       <meta property="og:site_name" content="My React App" />
//       <meta property="og:title" content={title} />
//       <meta property="og:description" content={description} />
//       <meta property="og:image" content={imageUrl} />
//       <meta property="og:url" content={currentUrl} />

//       {/* Twitter Card Meta Tags */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={imageUrl} />
//     </Helmet>
//   );
// };

// export default Meta;

// src/components/Meta.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Meta = () => {
  const location = useLocation();
  
  // Define metadata for each route
  const metaData = {
    "/": {
      title: "Home | My React App",
      description: "Welcome to the home page of my React App.",
      image: "home-image.png",
    },
    "/about": {
      title: "About | My React App",
      description: "Learn more about our React application and its features.",
      image: "about-image.png",
    },
    "/contact": {
      title: "Contact | My React App",
      description: "Get in touch with us - we'd love to hear from you!",
      image: "contact-image.png",
    },
    // Add more routes as needed
  };

  // Get current route's metadata or use defaults
  const currentMeta = metaData[location.pathname] || metaData["/"];
  const baseUrl = "https://react-helmet-one.vercel.app";
  const currentUrl = `${baseUrl}${location.pathname}`;
  const imageUrl = `${baseUrl}/${currentMeta.image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{currentMeta.title}</title>
      <meta name="description" content={currentMeta.description} />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="My React App" />
      <meta property="og:title" content={currentMeta.title} />
      <meta property="og:description" content={currentMeta.description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={currentMeta.title} />
      <meta name="twitter:description" content={currentMeta.description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default Meta;
