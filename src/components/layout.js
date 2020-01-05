import React from "react";
import { Global, css } from "@emotion/core";
import { designTokens } from "../utils/style";
import { library, config } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

config.autoAddCss = false;
library.add(fab, faEnvelope);

const globalStyles = css`
  * {
    box-sizing: border-box;
    font-size: ${designTokens.text.size.standard};
    font-family: 'Roboto', sans-serif;
    margin: 0;
    padding: 0;
    line-height: 1.5;
    color: black;
  }

  html {
    font-size: ${designTokens.text.size.standard};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
  }

  h1 {
    font-size: ${designTokens.text.size.xlarge};
    margin-bottom: 12px;
  }

  h2 {
    font-size: ${designTokens.text.size.large};
  }

  h3 {
    font-size: ${designTokens.text.size.medium};
  }

  p {
    padding: 8px 0;
  }

  a {
    border: none;
    text-decoration: none;
    font-size: inherit;
    color: ${designTokens.colours.accent};
    font-family: 'Roboto';
    box-shadow: none;
  }

  a:visited {
    text-decoration: none;
    color: ${designTokens.colours.accent};
  }

  a:active, a:hover {
    text-decoration: underline;
    color: ${designTokens.colours.accent};
  }

  .code, .language-text {
    font-family: 'Roboto Mono';
    background-color: #F5F5F5;
  }
`;

const Layout = ({ children }) => (
  <div>
    <Global styles={globalStyles} />
    <main>{children}</main>
  </div>
);

export default Layout;
