import React from 'react';

const Card = (props : any) => {
  return  <div className='card'>
  <div className='title'>
      {props.title} 
  </div>
  <div className='c_amount'>
      {props.amount}$</div>
</div>;
};

export default Card;
