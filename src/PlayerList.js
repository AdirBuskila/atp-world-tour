import React from 'react';
import PlayerCard from './PlayerCard';
import './styles/PlayerList.css'; // import the CSS file

const PlayerList = ({ players }) => {
  return (
    <div className='player-list'>
      {players.map((player, index) => {
        return <PlayerCard key={index} player={player} />;
      })}
    </div>
  );
};

export default PlayerList;
