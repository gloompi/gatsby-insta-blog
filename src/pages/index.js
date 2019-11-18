import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';

import usePosts from '../hooks/use-posts';
import Layout from '../components/common/Layout';
import Post from '../components/post';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <h1>Home</h1>
      <p>here is the best hamburgers</p>
      <Link to='/about'>About &rarr;</Link>
      <Layout>
        <h2>Posts</h2>
        <ul css={css`
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          flex-direction: column;
          padding: 15px 0;
          list-style-type: none;
        `}>
          {posts.map((post) => (
            <Post key={post.slug} {...post}/>
          ))}
        </ul>
        <Insta />
      </Layout>
    </>
  );
};
