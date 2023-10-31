import React, { useState } from 'react';
import { allCards } from '../const';
import Card from '../components/Card';
import '../App.css';

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    const query = deckLink.substring(deckLink.indexOf('?deck=') + 6);
    const cardNumbers = query.split('.').map(Number);
    const filteredCardNumbers = cardNumbers.filter((num) => !isNaN(num));
  
    // Check if the card count is above 25
    if (filteredCardNumbers.length > 25) {
      setErrorMessage("Invalid deck: More than 25 cards detected");
      setDeckLink('');
      return;
    }

    // Calculate the total cost of the deck
    const totalCost = filteredCardNumbers.reduce((total, number) => {
      const cardInfo = allCards.find((card) => card.id === number);
      if (cardInfo) {
        return total + cardInfo.cost;
      }
      return total;
    }, 0);

    // Check if the cost is above 50
    if (totalCost > 50) {
      setErrorMessage("Invalid deck: Cost is more than 50");
      setDeckLink('');
      return;
    }

    // Check if the card count is less than 25
    if (filteredCardNumbers.length < 25) {
      setErrorMessage("Invalid deck: Less than 25 cards detected");
      setDeckLink('');
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

    setDeckComposition(cardData);
    setLinkInputVisible(false);
    setErrorMessage('');

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
              <Card card={card} />
            </div>
          ))}
        </div>
      )}

      {errorMessage && (
        <div className="error-message">
          <p>{errorMessage}</p>
        </div>
      )}
    </div>
  );
};

export default DeckInput;
