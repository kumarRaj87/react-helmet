import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function About() {
  useEffect(() => {
    document.getElementById("favicon").href =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSitRR1YjtF86dsqjrS6mlhXp14y7R9Nk9LeQ&s";
      document.getElementById("title").innerHTML= "Demo App - About";
      document.getElementById("description").content = "This is the About page of Demo App"
  }, []);

  return (
    <div>
      <Helmet>
        <title>Demo App - About</title>
        <meta name="description" content="This is the about page of Demo App" />
      </Helmet>
      <h1>About Page</h1>
    </div>
  );
}

export default About;
