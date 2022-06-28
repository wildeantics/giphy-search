import * as React from 'react';
import { GiphyProvider } from './context/giphy/GiphyContext';
import { AlertProvider } from './context/alert/AlertContext';
import Alert from './components/Alert';
import Search from './components/Search';
import GiphyList from './components/GiphyList';

const App = () => {
  return (
    <GiphyProvider>
      <AlertProvider>
        <main className="container">
          <Alert />
          <Search />
          <GiphyList />
        </main>
      </AlertProvider>
    </GiphyProvider>
  );
};

export default App;
