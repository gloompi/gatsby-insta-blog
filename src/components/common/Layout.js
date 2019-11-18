import React from 'react';
import { Global, css } from '@emotion/core';
import Helmet from 'react-helmet';

import useSiteMetadata from '../../hooks/use-sitemetadata';
import Header from './Header';

const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Global styles={globalStyles}/>
      <Helmet>
        <html lang='en' />
        <title>{title}</title>
        <meta name='description' content={description} />
      </Helmet>
      <Header />
      <main css={mainStyles}>{children}</main>
      <footer css={footerStyles}>Footer</footer>
    </>
  );
};

const globalStyles = css`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  * + * {
    margin-top: 1rem;
  }

  html,
  body {
    margin: 0;
    color: #555;
    font-family: -apple-system, BlinkMacSystemFont, 'segoe UI', Roboto, Helvetica, sans-serif
    font-size: 18px;
    line-hegiht: 1.4;

    > div {
      margin-top: 0;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #222;
      line-height: 1.1;

      + * {
        margin-top: 0.5rem;
      }
    }

    li {
      margin-top: 0.25rem;
    }
  }
`;

const mainStyles = css`
  min-height: calc(100vh - 100px);
  width: 100%;
  padding: 0 calc((100vw - 900px) / 2);
`;

const footerStyles = css`
  height: 50px;
  width: 100%;
  padding: 0 calc((100vw - 900px) / 2);
`;

export default Layout;
