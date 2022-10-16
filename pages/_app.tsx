import React from "react";
import { MDXProvider } from "@mdx-js/react";
import "katex/dist/katex.min.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
    <MDXProvider>
      <Component {...pageProps} />
    </MDXProvider>
	);
}

export default MyApp;
