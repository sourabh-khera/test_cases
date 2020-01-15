import React, { useState, useEffect } from 'react';
import Button from '../button';

import './style.css';

const displayCount  = () => { 

const [count, setCount] = useState(0);
const [name, setName] = useState(''); 

useEffect(()=>{
  console.log('Hello-',count);  
  return () => {
    console.log('cleaning ----') 
  }
}, [count]);

const incrementCount = () => {
  setCount(count + 1);
}


const handleChange = (e) => {
  setName(e.target.value);
}
 if(count === 5)
   throw new Error('I crashed');
  else {
    return(
        <div className='count-container' data-test='countComponent'>
          <div className='display-count'>{count}</div>
          <div className='button-wrapper'>{<Button handleClick={incrementCount}/>}</div>
          <input className='name-input' type='text' value={name} name='name' onChange={handleChange}/>
        </div>
    );
  } 
}

export default displayCount;