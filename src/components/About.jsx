import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.querySelector('meta[name="description"]')?.setAttribute("content", "Learn more about us on this page.");
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", "About Us | My React App");
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", "Find out more about us!");
    document.querySelector('meta[property="og:image"]')?.setAttribute("content", "https://react-helmet-one.vercel.app/about-image.png");
  }, []);

  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
};

export default About;
