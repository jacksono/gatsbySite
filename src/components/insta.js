import React from 'react';
import { css } from '@emotion/core';
import Image from 'gatsby-image';
import UseInstagram from '../hooks/useInstagram';

const Insta = () => {
  const instaPhotos = UseInstagram();
  const { username } = instaPhotos[0];

  return (
    <>
      <h1>Instagram posts from @{username}</h1>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`www.instagram.com/p/${photo.id}/`}
            target='_blank rel="noopener noreferrer"'
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 120px;
              transition: 200ms box-shadow linear;
              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
            key={photo.id}
          >
            <Image
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  );
};

export default Insta;
