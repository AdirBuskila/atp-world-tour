import React, { useState } from 'react';
import PlayerList from './PlayerList';
import SearchBox from './SearchBox';
import { fetchPlayerData } from './api';

const App = () => {
  const [players, setPlayers] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = async (playerName) => {
    const playerData = await fetchPlayerData(playerName);
    console.log('playerData');
    console.log(playerData);

    if (playerData) {
      setPlayers([playerData]);
      setError(null);
    } else {
      setPlayers([]);
      setError('No player found with that name.');
    }
  };

  return (
    <div className='App'>
      <h1>Tennis Player Information</h1>
      <SearchBox onSearch={handleSearch} />
      {console.log(players)}
      {error && <p>{error}</p>}
      {players.length > 0 && <PlayerList players={players} />}
    </div>
  );
};

export default App;
