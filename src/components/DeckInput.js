import React, { useState } from 'react';
import { allCards } from '../const';
import Card from '../components/Card';
import '../App.css';

const DeckInput = ({ onDeckInput }) => {
  const [deckLink, setDeckLink] = useState('');
  const [deckComposition, setDeckComposition] = useState([]);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [personalityCard, setPersonalityCard] = useState(null);

  const handleInputChange = (e) => {
    setDeckLink(e.target.value);
  };

  const handleAnalyzeClick = () => {
    const query = deckLink.substring(deckLink.indexOf('?deck=') + 6);
    const cardNumbers = query.split('.').map(Number);

    // Ensure there is no more than one personality card
    const personalityCardCount = cardNumbers.filter((num) => {
      const cardInfo = allCards.find((card) => card.id === num);
      return cardInfo && cardInfo.type === 'Personality';
    }).length;

    if (personalityCardCount > 1) {
      setErrorMessage("Invalid deck: More than one personality card detected");
      setDeckLink('');
      return;
    }

    // Identify and set the personality card (if available)
    const personalityCardInfo = allCards.find((card) => {
      return card.type === 'Personality' && cardNumbers.includes(card.id);
    });

    if (personalityCardInfo) {
      setPersonalityCard(personalityCardInfo);
      console.log(`Personality Card Chosen: ${personalityCardInfo.name}`);
    } else {
      setPersonalityCard(null);
    }

    // Exclude the personality card
    const nonPersonalityCardNumbers = cardNumbers.filter((num) => {
      const cardInfo = allCards.find((card) => card.id === num);
      return cardInfo && cardInfo.type !== 'Personality';
    });

    // Check if the card count is above 25 (excluding personality cards)
    if (nonPersonalityCardNumbers.length > 25) {
      setErrorMessage("Invalid deck: More than 25 cards detected (excluding personality cards)");
      setDeckLink('');
      return;
    }

    // Calculate the total cost of the deck
    const totalCost = nonPersonalityCardNumbers.reduce((total, number) => {
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

    // Check if the card count is less than 25 (excluding personality cards)
    if (nonPersonalityCardNumbers.length < 25) {
      setErrorMessage("Invalid deck: Less than 25 cards detected (excluding personality cards)");
      setDeckLink('');
      return;
    }

    const cardData = nonPersonalityCardNumbers.map((number) => {
      const cardInfo = allCards.find((card) => card.id === number);
      if (cardInfo) {
        const { id, name, cost, type } = cardInfo;
        const paddedNumber = String(id).padStart(4, '0');
        const cardImagePath = `/cards/Card_${paddedNumber}_bake.png`;
        return { number, name, cost, type, image: cardImagePath };
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
