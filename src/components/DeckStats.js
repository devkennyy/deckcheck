import React from 'react';
import Card from './Card';
import { allCards } from '../const';

const DeckStats = ({ deckData }) => {
  // Calculate the average cost of cards in the deck
  const calculateAverageCost = (deck) => {
    if (Array.isArray(deck) && deck.length > 0) {
      const totalCost = deck.reduce((sum, card) => sum + card.cost, 0);
      return (totalCost / deck.length).toFixed(2);
    }
    return 0;
  };

  // Find the highest cost card in the deck
  const findHighestCost = (deck) => {
    if (Array.isArray(deck) && deck.length > 0) {
      const highestCostCard = deck.reduce((highest, card) =>
        card.cost > highest.cost ? card : highest, deck[0]);
      return highestCostCard.cost;
    }
    return 0;
  };

  // Count the number of cards in each card type (Attack, Defense, Helper, Debuff, etc.)
  const cardTypeCounts = deckData.reduce((counts, card) => {
    counts[card.type] = (counts[card.type] || 0) + 1;
    return counts;
  }, {});

  // Calculate the distribution of card costs (e.g., how many cards of cost 1, 2, 3, etc.)
  const cardCostDistribution = deckData.reduce((distribution, card) => {
    distribution[card.cost] = (distribution[card.cost] || 0) + 1;
    return distribution;
  }, {});

  return (
    <div className='deckStatistics'>
      <h2>Deck Statistics</h2>
      <p>Average Cost: {calculateAverageCost(deckData)}</p>
      <p>Highest Cost: {findHighestCost(deckData)}</p>

      {/* Display counts for each card type */}
      <h3>Card Type Counts:</h3>
        {Object.entries(cardTypeCounts).map(([type, count]) => (
          <p key={type}>{type}: {count}</p>
        ))}

      {/* Display the distribution of card costs */}
      <h3>Card Cost Distribution:</h3>
        {Object.entries(cardCostDistribution).map(([cost, count]) => (
          <p key={cost}>Cost {cost}: {count} cards</p>
        ))}
    </div>
  );
};

export default DeckStats;
