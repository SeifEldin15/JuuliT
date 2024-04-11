// PostsCard.tsx
import React from 'react';
import './PostsCard.css';

interface PostsCardProps {
  heading: string;
  paragraph: string;
  imgSrc: string;
}

const PostsCard: React.FC<PostsCardProps> = ({ heading, paragraph, imgSrc }) => {
  return (
     <div className='PostsCard'>
        <img src={imgSrc} alt="" />
        <h2>{heading}</h2>
        <p>{paragraph}</p>
     </div>
  );
}

export default PostsCard;
