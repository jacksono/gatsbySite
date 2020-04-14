import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Link to="/about/"> About me &rarr;</Link>
    <h1> HOME </h1>
    <p>Hell Frontend Masters!</p>
  </Layout>
);
