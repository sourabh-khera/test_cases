import React from 'react';
import './style.css';

const renderButton = ({handleClick}) => {
  return (
    <button onClick={handleClick}className='submit' data-test='buttonComponent'>Submit</button>
  )
}

export default renderButton;