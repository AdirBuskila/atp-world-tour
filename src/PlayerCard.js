import React from 'react';
import './styles/PlayerCard.css'; // import the CSS file

const PlayerCard = ({ player }) => {
  const getFlagEmoji = (countryCode) => {
    const offset = 127397;
    return countryCode
      .toUpperCase()
      .split('')
      .map((char) => String.fromCodePoint(char.charCodeAt() + offset))
      .join('');
  };

  return (
    <div className='player-card'>
      <img src={player.Image} alt={player.Name} />
      <h2>
        {player.Name} {player['Flag Code'] && getFlagEmoji(player['Flag Code'])}
      </h2>
      <p>🎂 Age: {player.Age}</p>
      <p>📍 Birthplace: {player.Birthplace}</p>
      <p>🎾 Play Style: {player['Play Style']}</p>
      <p>🏆 Rank: {player.Rank}</p>
      <p>💰 Prize money 2023: {player['Prize money 2023']}</p>
      <p>💵 Prize money Career: {player['Prize money Career']}</p>
      <p>📊 W/L 2023: {player['W/L 2023']}</p>
      <p>📈 W/L Career: {player['W/L Career']}</p>
    </div>
  );
};

export default PlayerCard;
