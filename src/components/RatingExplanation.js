import React from 'react';

const RatingExplanation = () => {
  return (
    <div>
      <h2>📜 Rating Explanation</h2>

      <h3>Attack Rating</h3>
      <p>
        The <span style={{ color: 'orange' }}>Attack Rating</span> represents your deck's offensive strength. It is determined by the number of weapon cards, buff cards, and their cost distribution.
      </p>
      <p>
        A high <span style={{ color: 'green' }}>Attack Rating</span> suggests that your deck is well-equipped for offensive gameplay.
      </p>
      <p>
        A low <span style={{ color: 'red' }}>Attack Rating</span> indicates potential weaknesses in offense. To improve this rating, consider adding more weapon cards or optimizing the cost distribution of your buff cards.
      </p>

      <h3>Defense Rating</h3>
      <p>
        The <span style={{ color: 'orange' }}>Defense Rating</span> assesses your deck's defensive capabilities. It considers the number of helper cards, debuff cards, and their cost distribution.
      </p>
      <p>
        A high <span style={{ color: 'green' }}>Defense Rating</span> signifies that your deck excels in defense-oriented strategies.
      </p>
      <p>
        A low <span style={{ color: 'red' }}>Defense Rating</span> suggests potential vulnerabilities in your defense. To enhance defense, consider adding more defensive cards or optimizing the cost distribution of your debuff cards.
      </p>

      <h3>Synergy Rating</h3>
      <p>
        The <span style={{ color: 'orange' }}>Synergy Rating</span> reflects the balance between your Attack and Defense Ratings, indicating your deck's overall strategic alignment.
      </p>
      <p>
        A "<span style={{ color: 'green' }}>Perfect</span>" Synergy Rating suggests that your deck is well-balanced and equally proficient in both attack and defense.
      </p>
      <p>
        A "<span style={{ color: 'green' }}>Balanced</span>" Synergy Rating signifies that your deck is adaptable and capable of handling various strategies effectively.
      </p>
      <p>
        An "<span style={{ color: 'red' }}>Attack-Oriented</span>" Synergy Rating indicates a focus on offensive strategies, while a "<span style={{ color: 'red' }}>Defense-Oriented</span>" Synergy Rating emphasizes a defensive approach.
      </p>

      <h3>Versatility Rating</h3>
      <p>
        The <span style={{ color: 'orange' }}>Versatility Rating</span> measures your deck's adaptability by considering the number of attack and defense cards in your deck.
      </p>
      <p>
        A high <span style={{ color: 'green' }}>Versatility Rating</span> implies that your deck is versatile and can adapt to various gaming scenarios and strategies.
      </p>
      <p>
        A low <span style={{ color: 'red' }}>Versatility Rating</span> suggests specialization in either attack or defense. To improve versatility, consider adding cards of the opposite type to your deck.
      </p>
    </div>
  );
};

export default RatingExplanation;
