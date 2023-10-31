import React from 'react';
import '../App.css';

const DeckRating = ({ totalCost = 0, cardCount = 0 }) => {
  // Calculate other ratings (attack, defense, synergy, versatility) here if needed

  let costColorClass = '';

  if (totalCost >= 49 && totalCost <= 50) {
    costColorClass = 'green-cost';
  } else if (totalCost >= 47 && totalCost <= 48) {
    costColorClass = 'yellow-cost';
  } else {
    costColorClass = 'red-cost';
  }

  return (
    <div className="deck-rating">
      <h2>Deck Rating</h2>
      <p>Total Cost: <span className={costColorClass}>{totalCost}</span></p>

      <div className="rating-header">
        <p>Attack: <span>x/10</span></p> 
        <p>Defense: <span>x/10</span></p>
        <p>Synergy: <span>x/10</span></p>
        <p>Versatility: <span>x/10</span></p>
      </div>
    </div>
  );
};

export default DeckRating;
