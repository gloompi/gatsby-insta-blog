import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/common/Layout';

export default () => (
  <Layout>
    <h1>About me</h1>
    <p>This is about page</p>
    <Link to='/'>&larr; back to home</Link>
  </Layout>
);