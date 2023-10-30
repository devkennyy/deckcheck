// Manages the deck input and link import functionality.
import React, { useState } from 'react';

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    // Implement logic to process the deck link and call onDeckInput with the data
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter Deck Link"
        value={deckLink}
        onChange={handleInputChange}
      />
      <button onClick={handleAnalyzeClick}>Analyze</button>
    </div>
  );
};

export default DeckInput;
