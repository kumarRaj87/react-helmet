// import React from "react";
// import Meta from "./Meta";

// const Contact = () => (
//   <div>
//     <Meta 
//       title="Contact Us | My React App"
//       description="Get in touch with us via this page."
//       image="https://react-helmet-one.vercel.app/contact-image.png"
//       url="https://react-helmet-one.vercel.app/contact"
//     />
//     <h1>Contact Page</h1>
//   </div>
// );

// export default Contact;

import React, { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    document.getElementById("title")?.setAttribute("content", "Contact Us | My React App");
    document.getElementById("description")?.setAttribute("content", "Get in touch with us through our contact page.");
    document.getElementById("image")?.setAttribute("content", "https://react-helmet-one.vercel.app/contact-image.png");
    document.title = "Contact Us | My React App";
  }, []);

  return (
    <div>
      <h1>Contact Page</h1>
    </div>
  );
};

export default Contact;


