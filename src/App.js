import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

// // Meta component to handle head modifications
// const Meta = ({ title, description, image, url }) => {
//   const currentUrl = url || window.location.href;
//   const imageUrl = image.startsWith("http") ? image : `https://yourdomain.com${image}`;

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

//       {/* Image Size for Open Graph (Mandatory for some platforms) */}
//       <meta property="og:image:width" content="1200" />
//       <meta property="og:image:height" content="630" />

//       {/* Twitter Meta Tags (Optional) */}
//       <meta name="twitter:card" content="summary_large_image" />
//       <meta name="twitter:title" content={title} />
//       <meta name="twitter:description" content={description} />
//       <meta name="twitter:image" content={imageUrl} />
//     </Helmet>
//   );
// };

const Meta = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};


// // Example pages with different meta data
// const Home = () => (
//   <div>
//     {/* <Meta 
//       title="Home | My React App"
//       description="Welcome to my React application's homepage"
//       image="/home.png"
//       url="https://react-helmet-one.vercel.app/"
//     /> */}
//     <Helmet>
//       <title>home page</title>
//       <meta name='description' content='info of home page' />
//     </Helmet>
//     <h1>Home Page</h1>
//   </div>
// );

// const About = () => (
//   <div>
//     {/* <Meta 
//       title="About Us | My React App"
//       description="Learn more about our company and team"
//       image="/about.png"
//       url="https://react-helmet-one.vercel.app/about"
//     /> */}
//     <Helmet>
//       <title>About page</title>
//       <meta name='description' content='info of about page' />
//     </Helmet>
//     <h1>About Page</h1>
//   </div>
// );

// const Contact = () => (
//   <div>
//     {/* <Meta
//       title="Contact | My React App"
//       description="Get in touch with us"
//       image="/contact.png"
//       url="https://react-helmet-one.vercel.app/contact"
//     /> */}
//     <Helmet>
//       <title>contact page</title>
//       <meta name='description' content='info of contact page' />
//     </Helmet>
//     <h1>Contact Page</h1>
//   </div>
// );


const Home = () => (
  <div>
    <Meta title="Home | My React App" description="This is the home page." />
    <h1>Home Page</h1>
  </div>
);

const About = () => (
  <div>
    <Meta title="About Us | My React App" description="Learn more about us." />
    <h1>About Page</h1>
  </div>
);

const Contact = () => (
  <div>
    <Meta title="Contact | My React App" description="Get in touch with us." />
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