import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Contact() {
  useEffect(() => {
    document.getElementById("favicon").href =
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDt3UtZX_rk0slCVjswq6dIS9aY-GDixb_hg&s";
      document.getElementById("title").innerHTML= "Demo App - Contact";
      document.getElementById("description").content = "This is the contact page of Demo App"
  }, []);

  return (
    <div>
      <Helmet>
        <title>Demo App - Contact</title>
        <meta name="description" content="This is the contact page of Demo App" />
      </Helmet>
      <h1>Contact Page</h1>
    </div>
  );
}

export default Contact;
