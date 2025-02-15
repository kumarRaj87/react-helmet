import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HelmetWrapper = ({ title, description, image, url }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
    </Helmet>
  );
};

const AppLayout = ({ children }) => {
  return (
    <HelmetProvider>
      {children}

      {/* Ensure script tags always remain last */}
      <Helmet>
        <link rel="icon" href="/favicon.ico" />
        <script defer src="/static/js/bundle.js"></script>
      </Helmet>
    </HelmetProvider>
  );
};

export { HelmetWrapper, AppLayout };
