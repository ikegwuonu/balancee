import React from 'react'

const Card = (props) => {
    const {imgURL, text, amount,colour}=props;
  return (
    
    <div className={`${colour==="active"?`active-card`:'notactive-card'}`}>
        
        <img src={imgURL} alt="money sign" />    
        
        
        <p className='card-text'>{text}</p>
        <p className='card-amount'><b>${amount.toLocaleString()}</b></p>
    

    </div>
  )
}

export default Card