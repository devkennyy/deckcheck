import React, { useState, useEffect } from 'react';
import DeckInput from './components/DeckInput';
import DeckRating from './components/DeckRating'; // Import the DeckRating component
import './App.css';
import Card from './components/Card';

function App() {
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);

  const handleDeckComposition = (deckData) => {
    setDeckComposition(deckData);
    setLinkInputVisible(false);
  };

  // Calculate the total cost based on deckComposition
  const totalCost = deckComposition.reduce((total, card) => total + card.cost, 0);

  return (
    <div>
      {isLinkInputVisible ? (
        <DeckInput onDeckInput={handleDeckComposition} />
      ) : (
        <div>
          <DeckRating totalCost={totalCost} />
          <h2>Deck Composition</h2>
          <div className="deck-images">
            {deckComposition.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
