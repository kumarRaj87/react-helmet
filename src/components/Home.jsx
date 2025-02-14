import React from "react";
import Meta from "../components/Meta";

const Home = () => (
  <div>
    <Meta 
      title="Home | My React App"
      description="Welcome to the home page of my React App."
      image="https://react-helmet-one.vercel.app/home-image.png"
      url="https://react-helmet-one.vercel.app/"
    />
    <h1>Home Page</h1>
  </div>
);

export default Home;
