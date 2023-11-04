import React from 'react';

const CharacterSuggestion = ({ deckData }) => {
  // Define character suggestions for specific deck conditions
  const deckCharacterSuggestions = {
    "Heartless -> Nuke": [
      "Haru - Use Haru for her speed to guarantee your enemy won't kite you after using Heartless -> Nuke combo.",
    ],
  };

  // Function to check if the user's deck contains a specific combo
  const hasCombo = (deck, comboName) => {
    // Ensure deck is an array of combo names
    if (Array.isArray(deck)) {
      return deck.includes(comboName);
    }
    return false; // Return false if deck is not an array
  };

  // Check for deck-specific character suggestions
  const suggestions = [];
  for (const comboName in deckCharacterSuggestions) {
    if (hasCombo(deckData, comboName)) {
      suggestions.push(...deckCharacterSuggestions[comboName]);
    }
  }

  return (
    <div>
      <h2><span>💡</span> Character Suggestions</h2>
      {suggestions.length > 0 ? (
        <ul>
          {suggestions.map((suggestion, index) => (
            <li key={index}>{suggestion}</li>
          ))}
        </ul>
      ) : (
        <p>No specific character suggestions for your deck.</p>
      )}
    </div>
  );
};

export default CharacterSuggestion;
