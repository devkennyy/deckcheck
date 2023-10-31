import React, { useState } from 'react';
import { allCards } from '../const';
import Card from '../components/Card'

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);
  const [showErrorMessage, setShowErrorMessage] = useState(false);

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    const query = deckLink.substring(deckLink.indexOf('?deck=') + 6);
    const cardNumbers = query.split('.').map(Number);
    const filteredCardNumbers = cardNumbers.filter((num) => !isNaN(num));

    if (filteredCardNumbers.length > 25) {
      setShowErrorMessage(true);
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

      {showErrorMessage && (
        <div className="error-message">
          <p>Invalid deck: More than 25 cards detected</p>
        </div>
      )}
    </div>
  );
};

export default DeckInput;
