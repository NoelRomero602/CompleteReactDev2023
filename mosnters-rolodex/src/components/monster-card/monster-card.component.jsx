import React from 'react'
import './monster-card.styles.css' ;


const MonsterCard = ({ name, email, id, url}) => {

      

        return (

            <div className='card-container' key={id}>
                <img 
                    alt={`monster ${name}`}
                    src={url}
                />
                <h2>{name}</h2>
                <p>{email}</p>
            
            </div>
        )
    
}
export default MonsterCard; 





