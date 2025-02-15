import React, { useEffect } from "react";
import Meta from "./Meta";

const About = () => {
  useEffect(() => {
    document.getElementById("title")?.remove();
    document.getElementById("description")?.remove();
    document.getElementById("image")?.remove();
  }, []);
  return (
    <div>
      <Meta
        title="About Us | My React App"
        description="about this page."
        image="https://react-helmet-one.vercel.app/about-image.png"
        url="https://react-helmet-one.vercel.app/about"
      />
      <h1>About Page</h1>
    </div>
  )
}
export default About

// import React, { useEffect } from "react";

// const About = () => {
//   useEffect(() => {
//     document.getElementById("title")?.setAttribute("content", "About Us | My React App");
//     document.getElementById("description")?.setAttribute("content", "Learn more about us on this page.");
//     document.getElementById("image")?.setAttribute("content", "https://react-helmet-one.vercel.app/about-image.png");
//     document.title = "About Us | My React App";
//   }, []);

//   return (
//     <div>
//       <h1>About Page</h1>
//     </div>
//   );
// };

// export default About;
