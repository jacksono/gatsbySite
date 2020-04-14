import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <Link to="/">&larr; back to home </Link>
    <h1>ABOUT ME</h1>
    <p> This is about me </p>
  </Layout>
);
