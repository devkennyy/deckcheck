import React, { useState } from 'react';
import DeckInput from '../src/components/DeckInput'; // Import the DeckInput component
import './App.css';
import Card from './components/Card'

function App() {
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);

  // Function to handle the deck composition data
  const handleDeckComposition = (deckData) => {
    setDeckComposition(deckData);
    setLinkInputVisible(false); // Hide the input after analyzing the link
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
              <Card
                card={card}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
