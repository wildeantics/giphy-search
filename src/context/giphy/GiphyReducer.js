const giphyReducer = (state, action) => {
  switch (action.type) {
    case 'GET_GIPHYS':
      return { ...state, giphys: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: true };
    case 'CLEAR_GIPHYS':
      return { ...state, giphys: [] };
    default:
      return state;
  }
};

export default giphyReducer;
