import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

const giphy = axios.create({
  baseURL: 'https://api.giphy.com/v1/gifs',
});

// Get search results
export const searchGiphy = async (text) => {
  const params = new URLSearchParams({
    q: text,
  });

  const response = await giphy.get(
    `/search?api_key=${API_KEY}&q=${params}&limit=12`,
  );
  return response.data.data;
};
