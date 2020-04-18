import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';

export default () => {
  const posts = usePosts();

  return (
    <Layout>
      <Link to="/about/"> About me &rarr;</Link>
      <h1> HOME </h1>
      <p>Hell Frontend Masters!</p>

      <h2> Read My Blog </h2>
      {posts.map(post => (
        <PostPreview key={post.slug} post={post} />
      ))}
    </Layout>
  );
};
