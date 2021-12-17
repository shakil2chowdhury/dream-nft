import React from 'react';
import Card from './Card';
import './CardList.css'

const Cardlist = ({ cardList, setSelectedNft }) => {
    return (
        <div className='card-list'>
            {
            cardList.map(card => 
                <div onClick={() => setSelectedNft(card.token_id)}>
                <Card
                    key={card.token_id}
                    id={card.token_id}
                    name={card.name}
                    traits={card.traits}
                    image={card.image_url}
                />
                </div>
            )
            }
        </div>
    );
};

export default Cardlist;