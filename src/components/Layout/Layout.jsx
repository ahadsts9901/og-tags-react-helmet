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

Layout.defaultProps = {
  title: "Fake Store",
  description: "Fake products store made just for practice",
  mainTitle: "Fake Store",
  url: window.location.href,
  image:
    "https://yt3.googleusercontent.com/a3r_4fxqBWJxpcmDpkCcuCcdfr1ekBbHj877HOX97FeSFl7RKdw0E-ccgzUD_MBobjWm-qWJOoc=s176-c-k-c0x00ffffff-no-rj",
};

export default Layout;
