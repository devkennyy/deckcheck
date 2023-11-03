import React from 'react';
import Card from './Card';
import { allCards } from '../const';

const ComboCheck = ({ deckData }) => {
  const combos = [
    {
      comboName: "Heartless -> Nuke",
      necessaryCards: ["Heartless", "Nuke"],
      description: "Deadly combo that makes you invincible. Best used with Haru for chasing down enemies in the nuked area."
    },
    {
      comboName: "Ninja Log -> Self-Destruct Device",
      necessaryCards: ["Ninja Log", "Self-destruct Device"],
      description: "A surefire kill combo, even if it costs your life. Great for tracking camping opponents in 2v2 matches."
    },
    {
      comboName: "Ninja Smoke -> Self-Destruct Device",
      necessaryCards: ["Ninja Smoke", "Self-destruct Device"],
      description: "A surefire kill combo, even if it costs your life. Great for tracking camping opponents in 2v2 matches."
    },
    {
      comboName: "Parlay -> Self-Destruct Device",
      necessaryCards: ["Parlay", "Self-destruct Device"],
      description: "Similar to 'Ninja Log' -> 'Self-Destruct Device' but more obvious. Use when opponents can't escape."
    },
    {
      comboName: "Predator Vision -> Phantom Bullets",
      necessaryCards: ["Predator Vision", "Phantom Bullets"],
      description: "The wall hacks combo. Effective on long-range maps. DJ Newton can enhance accuracy for better results."
    },
    {
      comboName: "Barbed Cards -> Garbage Day -> Invisible Hand -> Hot Potato!",
      necessaryCards: ["Barbed Cards", "Garbage Day", "Invisible Hand", "Hot Potato"],
      description: "An evil combo best used while camping near your spawn if you're fortunate enough to get all four cards."
    },
    {
      comboName: "Bullet Time -> Mind Blowing",
      necessaryCards: ["Bullet Time", "Mind Blowing"],
      description: "A potentially game-winning combo that's easy to execute."
    },
    {
      comboName: "Bomb Lover -> Bigger Explosions -> Bomb Belt",
      necessaryCards: ["Bomb Lover", "Bigger Explosions", "Bomb Belt"],
      description: "Highly effective against campers with good projectile skills."
    },
    {
      comboName: "More Accuracy -> Less Accuracy -> Pixel Vision",
      necessaryCards: ["More Accuracy", "Less Accuracy", "Pixel Vision"],
      description: "Ideal for larger maps, especially effective against Raver players."
    },
    {
      comboName: "Health Down -> Poison",
      necessaryCards: ["Health Down", "Poison"],
      description: "Deals 63 damage on demand. Use 'Health Down' to locate opponents and 'Poison' for information."
    },
  ];

  console.log(deckData)

    // Function to check if the user's deck contains a specific combo
    const hasCombo = (deck, combo) => {
      if (Array.isArray(deck)) {
        const necessaryCards = combo.necessaryCards;
  
        return necessaryCards.every(cardName => deck.some(card => card.name === cardName));
      }
      return false;
    };
  
    const deckCombos = [];
    for (const combo of combos) {
      if (hasCombo(deckData, combo)) {
        deckCombos.push(combo);
      }
    }
  
    return (
      <div>
        <h2>Combo Check</h2>
        {deckCombos.length > 0 ? (
          <ul>
            {deckCombos.map((combo, index) => (
              <li key={index}>
                <div>
                  <Card card={allCards.find(card => card.name === combo.necessaryCards[0])} />
                  <span> + </span>
                  <Card card={allCards.find(card => card.name === combo.necessaryCards[1])} />
                </div>
                <p>{combo.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>Your deck doesn't contain any of the known card combos.</p>
        )}
      </div>
    );
  };
  
export default ComboCheck;