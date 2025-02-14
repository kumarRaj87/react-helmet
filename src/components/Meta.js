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

// Meta.js
import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const Meta = () => {
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    let title, description, image;

    switch (pathname) {
      case "/":
        title = "My React App";
        description = "Welcome to my React app with dynamic Open Graph tags!";
        image = "default-image.png";
        break;
      case "/about":
        title = "About Us";
        description = "Learn more about our team and mission.";
        image = "about-image.png";
        break;
      case "/contact":
        title = "Get in Touch";
        description = "Contact us for any questions or inquiries.";
        image = "contact-image.png";
        break;
      default:
        title = "My React App";
        description = "Welcome to my React app with dynamic Open Graph tags!";
        image = "default-image.jpeg";
    }

    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    metaDescription.setAttribute("content", description);

    const metaImage = document.querySelector('meta[property="og:image"]');
    metaImage.setAttribute("content", `https://react-helmet-one.vercel.app/${image}`);

    const metaTitle = document.querySelector('meta[property="og:title"]');
    metaTitle.setAttribute("content", title);
  }, [pathname]);

  return (
    <Helmet>
      <title>{document.title}</title>
      <meta name="description" content={document.querySelector('meta[name="description"]').content} />
      <meta property="og:image" content={document.querySelector('meta[property="og:image"]').content} />
      <meta property="og:title" content={document.querySelector('meta[property="og:title"]').content} />
    </Helmet>
  );
};

export default Meta;
