import React, { useState } from 'react';
import DeckInput from './components/DeckInput';
import './App.css';
import Card from './components/Card';

function App() {
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);

  const handleDeckComposition = (deckData) => {
    setDeckComposition(deckData);
    setLinkInputVisible(false);
  };

  return (
    <div>
      {isLinkInputVisible ? (
        <DeckInput onDeckInput={handleDeckComposition} />
      ) : (
        <div>
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
