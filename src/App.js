import React, { useEffect } from 'react';
import GNB from './components/GNB';
import Router from './routes/Router';
import { useMovie } from './hooks/useMovie';
import ToggleButton from './components/ToggleButton';

function App() {
  const { getMovies } = useMovie();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <GNB />
      <Router />
      <ToggleButton />
    </>
  );
}

export default App;
