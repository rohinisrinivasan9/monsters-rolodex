import React from 'react';
import './card.styles.css';

export const Card = (props) => (
    <div className='card-container'>
        <img alt="beast" src={`https://robohash.org/${props.beast.id}?set=set2&size=180x180`} />
        <h2>{props.beast.name}</h2>
        <p>{props.beast.email}</p>
    </div>
)