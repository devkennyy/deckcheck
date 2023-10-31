import React from 'react';

const Card = ({ card }) => {
  const { name, cost, image } = card;

  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <p>Cost: {cost}</p>
    </div>
  );
};

export default Card;
