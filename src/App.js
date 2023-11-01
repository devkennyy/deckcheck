import React, { useState, useEffect } from 'react';
import DeckInput from './components/DeckInput';
import DeckRating from './components/DeckRating';
import './App.css';
import Card from './components/Card';

function App() {
  const [deckComposition, setDeckComposition] = useState([]);
  const [personalityCard, setPersonalityCard] = useState(null);
  const [isLinkInputVisible, setLinkInputVisible] = useState(true);

  const handleDeckComposition = ({ deckData, personalityCard }) => {
    setDeckComposition(deckData);
    setPersonalityCard(personalityCard);
    setLinkInputVisible(false);
  };

  useEffect(() => {
    console.log(personalityCard); // Check if personalityCard is logged correctly
  }, [personalityCard]);

  // Calculate the totals based on deckComposition for Attack and Defense
  const totalCardCount = 25;
  const maxRating = 10;

  // Attack Calculation
  const weaponCardCount = deckComposition.filter(card => card.type === 'Weapon').length;
  const buffCardCount = deckComposition.filter(card => card.type === 'Buff').length;
  const totalCost = deckComposition.reduce((total, card) => total + card.cost, 0);
  const buffCardCost = deckComposition.filter(card => card.type === 'Buff').reduce((total, card) => total + card.cost, 0);

  let attackRating = (
    ((weaponCardCount / 9) * maxRating) +
    ((buffCardCount / totalCardCount) * maxRating) +
    (((buffCardCost + weaponCardCount) / totalCost) * maxRating)
  );

  // Defense Calculation
  const helperCardCount = deckComposition.filter(card => card.type === 'Helper').length;
  const debuffCardCount = deckComposition.filter(card => card.type === 'Debuff').length;
  const debuffCardCost = deckComposition.filter(card => card.type === 'Debuff').reduce((total, card) => total + card.cost, 0);

  let defenseRating = (
    ((helperCardCount / 17) * maxRating) +
    ((debuffCardCount / totalCardCount) * maxRating) +
    (((debuffCardCost + helperCardCount) / totalCost) * maxRating)
  );

  attackRating = Math.min(attackRating, maxRating);
  defenseRating = Math.min(defenseRating, maxRating);

  const ratingDifference = Math.abs(attackRating - defenseRating);
  let synergyRating;

  if (attackRating === defenseRating) {
    synergyRating = 'Perfect';
  } else if (ratingDifference <= 1) {
    synergyRating = 'Balanced';
  } else if (attackRating > defenseRating) {
    synergyRating = 'Attack-Oriented';
  } else {
    synergyRating = 'Defense-Oriented';
  }

  const versatilityRating = 0;

  return (
    <div>
      {isLinkInputVisible ? (
        <DeckInput onDeckInput={handleDeckComposition} />
      ) : (
        <div>
          <DeckRating totalCost={totalCost} attackRating={attackRating} defenseRating={defenseRating} synergyRating={synergyRating} versatilityRating={versatilityRating}/>
          <h2>Deck Composition</h2>
          <div className="deck-images">
            {deckComposition.map((card, index) => (
              <Card card={card} key={index} />
            ))}
          </div>
          {personalityCard && (
            <div>
              <h2>Deck Primary Character</h2>
              <div className="characterCard">
                <Card card={personalityCard} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
