import React from 'react';
import Card from './Card';
import '../App.css';
import { allCards } from '../const';

const ComboCheck = ({ deckData }) => {
  const combos = [
    {
      comboName: "Heartless -> Nuke",
      necessaryCards: ["Heartless", "Nuke"],
      description: "Deadly combo that makes you invincible, but don't waste any time in the nuked area."
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
      comboName: "Predator Vision -> Phantom Bullets -> Albatross 21",
      necessaryCards: ["Predator Vision", "Phantom Bullets", "Albatross 21"],
      description: "The wall hacks combo with even more power. Effective on long range maps."
    },
    {
      comboName: "Barbed Cards -> Garbage Day -> Invisible Hand -> Hot Potato!",
      necessaryCards: ["Barbed Cards", "Garbage Day", "Invisible Hand", "Hot Potato"],
      description: "An evil combo best used while camping near your spawn if you're fortunate enough to get all four cards."
    },
    {
      comboName: "Barbed Cards -> Hot Potato",
      necessaryCards: ["Barbed Cards", "Hot Potato"],
      description: "Make your opponent take large amounts of damage or risk explosion, more effective during a fight."
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
    {
      comboName: "Bigger Explosions -> Sticky Bomb",
      necessaryCards: ["Bigger Explosions", "Sticky Bomb"],
      description: "A simple combo that makes the sticky bomb even more lethal."
    },
    {
      comboName: "Bigger Explosions -> Land Mine",
      necessaryCards: ["Bigger Explosions", "Land Mine"],
      description: "A simple combo that makes the land mine even more lethal."
    },
    {
      comboName: "Katana -> Swap Weapons",
      necessaryCards: ["Katana", "Swap Weapons"],
      description: "Give your opponent the most difficult weapon to execute and cook them."
    },
    {
      comboName: "Boomstick -> Akimbo",
      necessaryCards: ["Boomstick", "Akimbo"],
      description: "A powerful combo that turns the Boomstick into a one shot machine."
    },
    {
      comboName: "Ninja Log -> Boomstick",
      necessaryCards: ["Ninja Log", "Boomstick"],
      description: "Close space with the ninja log and take the advantage in a close range fight."
    },
    {
      comboName: "Ninja Smoke -> Boomstick",
      necessaryCards: ["Ninja Smoke", "Boomstick"],
      description: "Close space with the ninja smoke and take the advantage in a close range fight."
    },
    {
      comboName: "Heartless -> Wall",
      necessaryCards: ["Heartless", "Wall"],
      description: "Hide your heart in the wall and watch the enemies panic."
    },
    {
      comboName: "Heartless -> Bouncy Wall",
      necessaryCards: ["Heartless", "Bouncy Wall"],
      description: "Hide your heart in the wall and watch the enemies panic."
    },
    {
      comboName: "Smoke Bomb -> Predator Vision",
      necessaryCards: ["Smoke Bomb", "Predator Vision"],
      description: "A harder to execute wall hack, smoke yourself and apply the vision buff."
    },
    {
      comboName: "Teleport Bomb -> Self Destruct Device",
      necessaryCards: ["Teleport Bomb", "Self-destruct Device"],
      description: "Teleport right to your enemy's toes and just explode."
    },
    {
      comboName: "Slow Reload -> Small Mag",
      necessaryCards: ["Slow Reload", "Small Mag"],
      description: "Make the enemies weapon weaker and play for shot trades."
    },
    {
      comboName: "Big Head -> Mind Blowing",
      necessaryCards: ["Big Head", "Mind Blowing"],
      description: "Make your opponent's brain bigger and get the kill even easier."
    },
    {
      comboName: "Pyromania -> Karrotov",
      necessaryCards: ["Pyromania", "Karrotov"],
      description: "Apply Pyromania at the start of the round and use the Karrotov as a Medkit."
    },
    {
      comboName: "Tin Man -> Energy Drink",
      necessaryCards: ["Tin Man", "Energy Drink"],
      description: "Counter the only downside of the Tin Man with increased speed."
    }
  ];

  const hasCombo = (deck, combo) => {
    if (Array.isArray(deck)) {
      const necessaryCards = combo.necessaryCards;
      return necessaryCards.every(cardName => deck.some(card => card.name === cardName));
    }
    return false;
  };

  const findPotentialCombos = (deck, combos) => {
    const potentialCombos = [];

    for (const combo of combos) {
      if (!hasCombo(deck, combo)) {
        const necessaryCards = combo.necessaryCards;
        const missingCards = necessaryCards.filter(cardName => !deck.some(card => card.name === cardName));

        if (missingCards.length === 1) {
          potentialCombos.push({
            comboName: combo.comboName,
            necessaryCards: missingCards,
            description: <p className="potentialComboDesc">Potential combo: <span className="red-cost">{missingCards[0]}</span> + {necessaryCards.filter(card => card !== missingCards[0]).join(" + ")}</p>,
          });
        }
      }
    }

    

    return potentialCombos;
  };

  const deckCombos = [];
  const potentialCombos = findPotentialCombos(deckData, combos);

  for (const combo of combos) {
    if (hasCombo(deckData, combo)) {
      deckCombos.push(combo);
    }
  }

  return (
    <div>
      <h2><span>💥</span> Combo Check</h2>
      {deckCombos.length > 0 ? (
        <div>
          {deckCombos.map((combo, index) => (
            <div key={index}>
              <div className="combo">
                {combo.necessaryCards.map((cardName, cardIndex) => (
                  <React.Fragment key={cardName}>
                    {cardIndex > 0 && <span className="plus"> + </span>}
                    <Card card={allCards.find(card => card.name === cardName)} />
                  </React.Fragment>
                ))}
              </div>
              <p>{combo.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>Your deck doesn't contain any of the known card combos.</p>
      )}
      {potentialCombos.length > 0 && (
        <div>
          <h3>Potential Combos</h3>
          {potentialCombos.map((combo, index) => (
            <div key={index}>
              <div className="combo">
                {combo.necessaryCards.map((cardName, cardIndex) => (
                  <React.Fragment key={cardName}>
                    {cardIndex > 0 && <span className="plus"> + </span>}
                    <Card card={allCards.find(card => card.name === cardName)} />
                  </React.Fragment>
                ))}
              </div>
              <p>{combo.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ComboCheck;
