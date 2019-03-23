import React from 'react';
import './Card.css';

function Card(props) {
    return (
        <div className= "Card">
            <h3>{props.title}</h3>
            <p>{props.content}</p>
            <button 
                onClick= {() => props.onClickDelete(props.id)} 
                type= "button">Delete</button>
        </div>    
    )
};

Card.propTypes= {
    onClickDelete: () => {}
};

export default Card;