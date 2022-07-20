import React, { useState } from 'react';

const Tour = ({id,name,image,info,price,removeTours}) => {
  const [readMore,setReadmore]=useState(false);
  return( 
  <article className='single-tour'>
    <img src={image} alt={name}/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4 className='tour-price'>{price}$</h4>
      </div>
      <p>
        {readMore?(info):`${info.substring(0,170)}...`}
        <button onClick={()=>{setReadmore(!readMore)}}>
          {readMore?`Show less`:`Show more`}
        </button>
        </p>
      <button className='delete-btn' onClick={()=>{removeTours(id)}}>Not interested</button>
    </footer>  
  </article>
)};

export default Tour;
