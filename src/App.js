import React, { useState, useEffect } from 'react';
import DeckInput from './components/DeckInput';
import DeckRating from './components/DeckRating';
import CharacterSuggestion from './components/CharacterSuggestion';
import ComboCheck from './components/ComboCheck';
import './App.css';
import Card from './components/Card';
import DeckStats from './components/DeckStats';
import RatingExplanation from './components/RatingExplanation'; 
import CollapsibleComponent from './components/CollapsibleComponent'; 

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

  // Initialize the state for collapsible sections
  const [isDeckRatingMinimized, setDeckRatingMinimized] = useState(false);
  const [isCharacterSuggestionMinimized, setCharacterSuggestionMinimized] = useState(true);
  const [isComboCheckMinimized, setComboCheckMinimized] = useState(true);
  const [isDeckCompositionMinimized, setDeckCompositionMinimized] = useState(true);
  const [isDeckStatsMinimized, setDeckStatsMinimized] = useState(true);
  const [isRatingExplanationMinimized, setRatingExplanationMinimized] = useState(true);

  // Calculate character and map bonuses
  // A TIER = 50
  // B TIER = 40
  // C TIER = 30
  // D TIER = 20
  // E TIER = 10

  // const characterStrengths = {
  //   Classic: { attackBonus: 50, defenseBonus: 0 },
  //   ThickCoat: { attackBonus: 0, defenseBonus: -30 },
  //   PowerLegs: { attackBonus: 30, defenseBonus: 0 },
  //   Runner: { attackBonus: 40, defenseBonus: 0 },
  //   Badass: { attackBonus: 0, defenseBonus: 40 },
  //   KatanaLover: { attackBonus: 10, defenseBonus: 0 },
  //   Brasslover: { attackBonus: 10, defenseBonus: 0 },
  //   DitherAndBanding: { attackBonus: 0, defenseBonus: 20 },
  //   ReadingGlasses: { attackBonus: 50, defenseBonus: 0 },
  //   ItsMedicinal: { attackBonus: 0, defenseBonus: 30 },
  //   BigBullets: { attackBonus: 30, defenseBonus: 0 },
  // };

  // // Get the character from the personalityCard
  // const characterPersonality = personalityCard && personalityCard.personality;

  // // Calculate the number of buff and debuff cards
  const attackCardCount = deckComposition.filter(card => card.type === 'Buff').length;
  const defenseCardCount = deckComposition.filter(card => card.type === 'Debuff').length;

  // Calculate versatility score based on various factors
  const versatilityScore = attackCardCount + defenseCardCount;

  // Normalize the versatility score to a 1-10 scale
  const maxVersatilityScore = 20; // The maximum versatility score
  const versatilityRating = (versatilityScore / maxVersatilityScore) * 10;

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

  return (
    <div>
      {isLinkInputVisible ? (
        <DeckInput onDeckInput={handleDeckComposition} />
      ) : (
        <div>
          {/* Wrap the components with CollapsibleComponent */}
          <CollapsibleComponent title="Deck Rating">
            <DeckRating
              totalCost={totalCost}
              attackRating={attackRating}
              defenseRating={defenseRating}
              synergyRating={synergyRating}
              versatilityRating={versatilityRating}
            />
          </CollapsibleComponent>

          <CollapsibleComponent title="Combo Check">
            <ComboCheck deckData={deckComposition} />
          </CollapsibleComponent>

          <CollapsibleComponent title="Deck Composition">
            <h2><span>🃏</span> Deck Composition</h2>
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
          </CollapsibleComponent>

          <CollapsibleComponent title="Deck Stats">
            <DeckStats deckData={deckComposition} />
          </CollapsibleComponent>
          
          <CollapsibleComponent title="Character Suggestion">
            <CharacterSuggestion deckData={deckComposition} />
          </CollapsibleComponent>

          <CollapsibleComponent title="Rating Explanation">
            <RatingExplanation />
          </CollapsibleComponent>
        </div>
      )}
    </div>
  );
}

export default App;