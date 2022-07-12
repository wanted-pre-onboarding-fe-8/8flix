import React, { useEffect } from 'react';
import GNB from './components/GNB';
import Router from './Router';
import { useMovie } from './models/useMovie';
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
