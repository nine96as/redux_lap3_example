import { faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

export default function DeleteButton({ handleClick }) {
  return (
    <span
      role='button'
      aria-label='delete'
      className='delete-btn'
      onClick={handleClick}
    >
      <FontAwesomeIcon icon={faBan} />
    </span>
  );
}
