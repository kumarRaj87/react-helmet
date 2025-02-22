import React, { useEffect } from "react";
import Meta from "./Meta";

const Contact = () => 
{
  useEffect(() => {
    document.getElementById("title")?.remove();
    document.getElementById("description")?.remove();
    document.getElementById("image")?.remove();
    const script = document.querySelector("script[src='/static/js/bundle.js']");
    if (script) script.remove();
  }, []);
  return (
  <div>
    <Meta 
      title="Contact Us | My React App"
      description="Get in touch with us via this page."
      image="https://react-helmet-one.vercel.app/contact-image.png"
      url="https://react-helmet-one.vercel.app/contact"
    />
    <h1>Contact Page</h1>
  </div>
)
  }

export default Contact;

// import React, { useEffect } from "react";

// const Contact = () => {
//   useEffect(() => {
//     document.querySelector('meta[name="description"]')?.setAttribute("content", "Get in touch with us through our contact page.");
//     document.querySelector('meta[property="og:title"]')?.setAttribute("content", "Contact Us | My React App");
//     document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Reach out to us for any inquiries or support.");
//     document.querySelector('meta[property="og:image"]')?.setAttribute("content", "https://react-helmet-one.vercel.app/contact-image.png");
//   }, []);

//   return (
//     <div>
//       <h1>Contact Page</h1>
//     </div>
//   );
// };

// export default Contact;

// import React from 'react'

// const Contact = () => {
//   return (
//     <div>Contact</div>
//   )
// }

// export default Contact

