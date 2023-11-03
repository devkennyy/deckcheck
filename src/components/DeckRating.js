import React from 'react';
import '../App.css';

const DeckRating = ({ totalCost = 0, attackRating = 0, defenseRating = 0, synergyRating = 0, versatilityRating = 0, }) => {
  // Determine the color class based on the total cost
  let colorClass = '';
  if (totalCost >= 49) {
    colorClass = 'green-cost';
  } else if (totalCost >= 47) {
    colorClass = 'yellow-cost';
  } else {
    colorClass = 'red-cost';
  }

  // Determine the color class based on the attack rating
  let attackColorClass = '';
  if (attackRating >= 8) {
    attackColorClass = 'green-cost';
  } else if (attackRating >= 5) {
    attackColorClass = 'yellow-cost';
  } else {
    attackColorClass = 'red-cost';
  }

  let defenseColorClass = '';
  if (defenseRating >= 8) {
    defenseColorClass = 'green-cost';
  } else if (defenseRating >= 5) {
    defenseColorClass = 'yellow-cost';
  } else {
    defenseColorClass = 'red-cost';
  }

  let synergyColorClass = '';
  if (synergyRating === 'Perfect') {
    synergyColorClass = 'green-cost';
  } else if (synergyRating === 'Balanced') {
    synergyColorClass = 'yellow-cost';
  } else if (synergyRating === 'Attack-Oriented') {
    synergyColorClass = 'yellow-cost';
  } else if (synergyRating === 'Defense-Oriented') {
    synergyColorClass = 'yellow-cost';
  }

  let versatilityColorClass = '';
  if (versatilityRating >= 8) {
    versatilityColorClass = 'green-cost';
  } else if (versatilityRating >= 5) {
    versatilityColorClass = 'yellow-cost';
  } else {
    versatilityColorClass = 'red-cost';
  }


  return (
    <div className="deck-rating">
      <h2>⭐ Deck Rating</h2>
      <p>Total Cost: <span className={colorClass}>{totalCost}</span></p>

      <div className="rating-header">
        <p>Attack: <span className={attackColorClass}>{Math.round(attackRating)}</span></p>
        <p>Defense: <span className={defenseColorClass}>{Math.round(defenseRating)}</span></p>
        <p>Synergy: <span className={synergyColorClass}>{synergyRating}</span></p>
        <p>Versatility: <span className={versatilityColorClass}>{Math.round(versatilityRating)}</span></p>
      </div>
    </div>
  );
};

export default DeckRating;
