import React from 'react';
import { graphql } from 'gatsby';
import { css } from '@emotion/core';
import { MDXRenderer } from 'gatsby-plugin-mdx';

import Layout from '../components/common/Layout';

export const query = graphql`
  query ($slug: String) {
    mdx(frontmatter: { slug: { eq: $slug } }) {
      frontmatter{
        title
        author
      }
      body
    }
  }
`;

const PostOverview = ({ data: { mdx: post } }) => (
  <Layout>
    <h1>{post.frontmatter.title}</h1>
    <p css={authorStyle}>Posted by {post.frontmatter.author}</p>
    <div css={bodyStyle}>
      <MDXRenderer>{post.body}</MDXRenderer>
    </div>
  </Layout>
);

const authorStyle = css`
  padding: 5px;
  font-size: 14px;
`;

const bodyStyle = css`
  line-height: 2;
  letter-spacing: 2px;
`;

export default PostOverview;
