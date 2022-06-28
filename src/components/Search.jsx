import React from 'react';
import { useState, useContext } from 'react';
import AlertContext from '../context/alert/AlertContext';
import GiphyContext from '../context/giphy/GiphyContext';
import { searchGiphy } from '../context/giphy/GiphyActions';

export default function Search() {
  const [text, setText] = useState('');

  const { giphys, dispatch } = useContext(GiphyContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === '') {
      setAlert('Please enter something', 'error');
    } else {
      dispatch({ type: 'SET_LOADING' });
      const giphys = await searchGiphy(text);
      dispatch({ type: 'GET_GIPHYS', payload: giphys });
    }
  };

  return (
    <div className="titleContainer">
      <h1>Giphy Search</h1>
      <form onSubmit={handleSubmit} className="searchContainer">
        <input
          type="text"
          placeholder="Search"
          value={text}
          onChange={handleChange}
          className="searchInput"
        />
        <button
          type="submit"
          className={`searchButton ${giphys.length === 0 && 'searchRounded'} `}
        >
          Go
        </button>
        {giphys.length > 0 && (
          <button
            onClick={() => dispatch({ type: 'CLEAR_GIPHYS' })}
            className="searchButton searchRounded"
          >
            Clear
          </button>
        )}
      </form>
    </div>
  );
}
