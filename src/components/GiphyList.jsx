import React from 'react';
import { useContext } from 'react';
import GiphyContext from '../context/giphy/GiphyContext';
import { PacmanLoader } from 'react-spinners';

export default function GiphyList() {
  const { giphys, loading } = useContext(GiphyContext);

  if (!loading) {
    return (
      <div className="giphyList">
        {giphys.map((giphy) => (
          <div key={giphy.id} className="gifContainer">
            <img
              src={giphy.images.original.url}
              alt={giphy.title}
              className="gif"
            />
            <div className="gifOverlay">
              <button
                className="gifOverlayButton"
                onClick={(event) => (window.location.href = giphy.url)}
              >
                Visit
              </button>
              <button
                className="gifOverlayButton"
                onClick={() => {
                  navigator.clipboard.writeText(giphy.images.original.url);
                }}
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  } else {
    return <PacmanLoader color="#4049c7" className="spinner" />;
  }
}
