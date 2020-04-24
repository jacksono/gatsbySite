import React from 'react';
import Layout from '../components/layout';
import usePosts from '../hooks/usePosts';
import PostPreview from '../components/post-preview';
import Hero from '../components/hero';
import Insta from '../components/insta';

export default () => {
  const posts = usePosts();

  return (
    <>
      <Hero />
      <Layout>
        <h2> Read My Blog </h2>
        {posts.map(post => (
          <PostPreview key={post.slug} post={post} />
        ))}
        <Insta />
      </Layout>
    </>
  );
};
