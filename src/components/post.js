import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'gatsby';
import Image from 'gatsby-image';

const Post = ({ title, excerpt, author, image, slug }) => (
  <article css={itemStyle}>
    <Link to={slug}>
      <Image fluid={image.sharp.fluid} alt={title}/>
      <h3>{title}</h3>
      <p>{excerpt}</p>
      <pre>{author}</pre>
    </Link>
  </article>
);

const itemStyle = css`
  width: 300px;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid #ccc;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }

  a {
    color: #000;
    text-decoration: none;

    &:hover {
      color: pink;
    }
  }
`;

export default Post;
