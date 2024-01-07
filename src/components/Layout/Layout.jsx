import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, mainTitle, title, description, image, url }) => {
  return (
    <>
      <Helmet>
        <title>{mainTitle}</title>
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content={url} />
        <meta property="twitter:url" content={url} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {children}
    </>
  );
};

export default Layout;
