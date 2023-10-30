import React, { useState } from 'react';
import './App.css';

import DeckInput from './components/DeckInput';
import DeckDisplay from './components/DeckDisplay';
import DeckRating from './components/DeckRating';
import DeckTips from './components/DeckTips';
import RatingExplanation from './components/RatingExplanation';
import ProblemsWarnings from './components/ProblemsWarnings';

function App() {
  // Define your state to manage deck data
  const [deckData, setDeckData] = useState({
    deckLink: '',
    // Add more deck-related data as needed
  });

  // Function to handle deck input
  const handleDeckInput = (deckLink) => {
    // Implement logic to process the deck link and retrieve deck data
    // Update deckData state with the retrieved data
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Deck Analyzer</h1>
        <DeckInput onDeckInput={handleDeckInput} />
        <DeckDisplay deckData={deckData} />
        <DeckRating deckData={deckData} />
        <DeckTips deckData={deckData} />
        <RatingExplanation />
        <ProblemsWarnings deckData={deckData} />
      </header>
    </div>
  );
}

export default App;
