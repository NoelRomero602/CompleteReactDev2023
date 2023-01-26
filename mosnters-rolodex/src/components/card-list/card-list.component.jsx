import React from 'react'


import MonsterCard from '../monster-card/monster-card.component.jsx'

import './card-list.styles.css';

const CardList = ({monsters}) => { 

        return (
        
            <div className='card-list'>
            
                {monsters.map((monster) => (  
                 
                    <MonsterCard
                     id={monster.id} 
                     name= {monster.name} 
                     email={monster.email} 
                     url= {`https://robohash.org/${monster.id}?set=set2&size=180x180`}  />
             
                     ))}

            </div>


        );
    
}

export default CardList; 