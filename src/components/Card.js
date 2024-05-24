import React from 'react';

const Card = ({ card }) => {
  if (!card || typeof card !== 'object') {
    console.error("Invalid card data:", card);
    return null; 
  }

  const { name, cost, image } = card;

  if (!name || !cost || !image) {
    console.error("Invalid card properties:", card);
    return null; 
  }

  const costIconPath = `/cost/card_cost_icon_${cost}.png`;
  const levelPath = '/level/card_lvl_max.png';

  return (
    <div className="card">
      <div className="card-content">
        <img src={image} alt={name} className="card-image" />
        <img src={costIconPath} alt={`Cost ${cost}`} className="cost-icon" />
        <img src={levelPath} alt="Level" className="level-icon" />
      </div>
    </div>
  );
};

export default Card;
