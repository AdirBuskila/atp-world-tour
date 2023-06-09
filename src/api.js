import axios from 'axios';
import { players_list } from './demodata';

const headers = {
  'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
  'X-RapidAPI-Host': process.env.REACT_APP_RAPIDAPI_HOST,
};

export const fetchPlayerData = async (playerName) => {
  const player = players_list.data.find((player) => player.Name.toLowerCase() === playerName.toLowerCase());

  if (!player) {
    return null;
  }

  const options = {
    method: 'GET',
    url: `https://ultimate-tennis1.p.rapidapi.com/player_info/${player.id}`,
    headers,
  };

  try {
    const response = await axios.request(options);
    return response.data.player_data[0]; // return the first element of the player_data array
  } catch (error) {
    console.error(error);
  }
};
