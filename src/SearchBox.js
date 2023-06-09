import React, { useState } from 'react';
import { players_list } from './demodata';

const SearchBox = ({ onSearch }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input list='players' type='text' value={searchValue} onChange={handleChange} placeholder='Search for a player...' />
      <datalist id='players'>
        {players_list.data.map((player, index) => (
          <option key={index} value={player.Name} />
        ))}
      </datalist>
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBox;
