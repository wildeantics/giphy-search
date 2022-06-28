import React from 'react';
import { createContext, useReducer } from 'react';
import giphyReducer from './GiphyReducer';

const GiphyContext = createContext();

export const GiphyProvider = ({ children }) => {
  const initialState = {
    giphys: [],
    giphy: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(giphyReducer, initialState);

  return (
    <GiphyContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GiphyContext.Provider>
  );
};

export default GiphyContext;
