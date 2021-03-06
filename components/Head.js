import React from "react";
import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription =
    "Providing digital transformation services for the small business community";
const defaultOGURL = "https://wwww.brightsidetech.io";
const defaultOGImage = "/thumbnail.png";
const defaultTitle = "Brightside Tech";

const Head = props => (
    <NextHead>
        <meta charSet="UTF-8" />
        <title>{props.title || defaultTitle}</title>
        <meta
            name="description"
            content={props.description || defaultDescription}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" sizes="192x192" href="/touch-icon.png" />
        <link rel="apple-touch-icon" href="/touch-icon.png" />
        <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:url" content={props.url || defaultOGURL} />
        <meta property="og:title" content={props.title || ""} />
        <meta
            property="og:description"
            content={props.description || defaultDescription}
        />
        <meta name="twitter:site" content={props.url || defaultOGURL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image" content={props.ogImage || defaultOGImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
            defer
            src="https://use.fontawesome.com/releases/v5.6.3/js/all.js"
            integrity="sha384-EIHISlAOj4zgYieurP0SdoiBYfGJKkgWedPHH4jCzpCXLmzVsw1ouK59MuUtP4a1"
            crossOrigin="anonymous"
        />
    </NextHead>
);

Head.propTypes = {
    title: string,
    description: string,
    url: string,
    ogImage: string
};

export default Head;
