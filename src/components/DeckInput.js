import React, { useState } from 'react';

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');
  const [deckComposition, setDeckComposition] = useState([]);

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    // Extract the query part of the link, which starts after "?deck="
    const query = deckLink.substring(deckLink.indexOf('?deck=') + 6);
    console.log('Extracted query:', query);
  
    // Extract card numbers from the query (assuming numbers are separated by periods)
    const cardNumbers = query.split('.').map(Number);
    console.log('Extracted card numbers:', cardNumbers);
  
    // Filter out any NaN values
    const filteredCardNumbers = cardNumbers.filter((num) => !isNaN(num));
    console.log('Filtered card numbers:', filteredCardNumbers);
  
    // Use your data mapping to get card data for each number
    const cardData = filteredCardNumbers.map((number) => {
      const paddedNumber = String(number).padStart(4, '0');
      const cardImagePath = `/cards/Card_${paddedNumber}_bake.png`;
      console.log('Card data for number', number, ':', cardImagePath);
      return { number, image: cardImagePath };
    });
    console.log('Card data:', cardData);
  
    setDeckComposition(cardData);
    onDeckInput(cardData); // Pass the deck composition to the parent component
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
      {/* Display deck composition based on the 'deckComposition' state */}
    </div>
  );
};

export default DeckInput;
