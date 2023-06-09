import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [search, setSearch] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type='text' value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search for a player...' />
      <button type='submit'>Search</button>
    </form>
  );
};

export default SearchBox;
