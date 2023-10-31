import React, { useState } from 'react';
import { allCards } from '../const';

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    // Extract the query part of the link, which starts after "?deck="
    const query = deckLink.substring(deckLink.indexOf('?deck=') + 6);

    // Extract card numbers from the query
    const cardNumbers = query.split('.').map(Number);

    // Filter out any NaN values
    const filteredCardNumbers = cardNumbers.filter((num) => !isNaN(num));

    // Check if the number of cards is less than or equal to 25
    if (filteredCardNumbers.length > 25) {
      setShowErrorMessage(true);
      setDeckLink(''); // Clear the input field
      return;
    }

    const cardData = filteredCardNumbers.map((number) => {
      const cardInfo = allCards.find((card) => card.id === number);
      if (cardInfo) {
        const { id, name, cost } = cardInfo;
        const paddedNumber = String(id).padStart(4, '0');
        const cardImagePath = `/cards/Card_${paddedNumber}_bake.png`;
        return { number, name, cost, image: cardImagePath };
      }
      return null;
    }).filter((card) => card !== null);

    console.log('Card Data:', cardData); // Log the card data

    setDeckComposition(cardData);
    setLinkInputVisible(false); // Hide the input after analyzing the link

    onDeckInput(cardData);
  };

  return (
    <div>
      {isLinkInputVisible ? (
        <div className="menu">
          <h2>Enter deck link:</h2>
          <input
            type="text"
            value={deckLink}
            onChange={handleInputChange}
          />
          <button onClick={handleAnalyzeClick}>Analyze</button>
        </div>
      ) : (
        <div className="deck-images">
          {deckComposition.map((card, index) => (
            <div key={index}>
              <img
                src={card.image}
                alt={`Card ${card.number}`}
                className="small-card-image"
              />
              <p>Cost: {card.cost}</p>
              {console.log('Cost:', card.cost)}
            </div>
          ))}
        </div>
      )}

      {showErrorMessage && (
        <div className="error-message">
          <p>Invalid deck: More than 25 cards detected</p>
        </div>
      )}
    </div>
  );
};

export default DeckInput;
