import React from 'react';
import weth from '../assets/weth.png'
import './Card.css'

const Card = ({id, name, traits, image}) => {
    return (
        <div className='card'>
            <img src={image} alt="Rare NFT" />
            <div className="details">
            <div className="name">
                {name}
            </div>
            <div className="id"> -#{id}</div>
            <div className="price-container">
                <img src={weth} alt="weth image" className='weth-image' />
                <div className="price">{traits[0]?.value}</div>
            </div>
            </div>
        </div>
    );
};

export default Card;