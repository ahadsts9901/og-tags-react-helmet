import React from 'react'
import { Helmet } from 'react-helmet'

const Layout = ({ children, mainTitle, title, description, image, url }) => {
    return (
        <>
            <Helmet>
                <title>{mainTitle.toUpperCase()}</title>
                <meta name="title" content={title} />
                <meta name="description" content={description} />
                <meta name="image" content={image} />
                <meta name="url" content={url} />
            </Helmet>
            {children}
        </>
    )
}

Layout.defaultProps = {
    title: "Fake Store",
    description: "Fake products store made just for practice",
    mainTitle: "Fake Store",
    url: window.location.href,
    image: "https://yt3.googleusercontent.com/a3r_4fxqBWJxpcmDpkCcuCcdfr1ekBbHj877HOX97FeSFl7RKdw0E-ccgzUD_MBobjWm-qWJOoc=s176-c-k-c0x00ffffff-no-rj"
}


export default Layout