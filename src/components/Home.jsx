import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Home() {
  useEffect(() => {
    document.getElementById("favicon").href =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbo3mE0i7omiwBGhyhExFTTq9Bnv9YZ6W9ag&s";
      document.getElementById("title").innerHTML= "Demo App - Home";
      document.getElementById("description").content = "This is the Home page of Demo App"
  }, []);

  return (
    <div>
      <Helmet>
        <title>Demo App - Home</title>
        <meta name="description" content="This is the home page of Demo App" />
      </Helmet>
      <h1>Home Page</h1>
    </div>
  );
}

export default Home;
