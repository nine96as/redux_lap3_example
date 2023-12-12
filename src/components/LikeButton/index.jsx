import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function LikeButton({ handleClick, liked }) {
  return (
    <span
      role='button'
      aria-label='like'
      className='like-btn'
      style={{ color: `${liked ? 'red' : 'white'}` }}
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faHeart} />
    </span>
  );
}
