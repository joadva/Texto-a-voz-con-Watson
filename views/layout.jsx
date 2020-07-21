import React from "react";
import PropTypes from "prop-types";
import { Header, Jumbotron } from "watson-react-components";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Speech to Text Demo</title>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="stylesheet" href="/css/watson-react-components.min.css" />
        <link rel="stylesheet" href="/css/style.css" />
      </head>
      <body>
        <Header />

        <div id="root">{children}</div>
        <script type="text/javascript" src="scripts/bundle.js" />
        <script
          type="text/javascript"
          src="https://cdn.rawgit.com/watson-developer-cloud/watson-developer-cloud.github.io/master/analytics.js"
        />
      </body>
    </html>
  );
}

Layout.propTypes = {
  children: PropTypes.object.isRequired, // eslint-disable-line
};
