import React, { useEffect } from 'react';
import GNB from './components/GNB';
import Router from './Router';
import { useMovie } from './models/useMovie';

function App() {
  const { getMovies } = useMovie();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      <GNB />
      <Router />
    </>
  );
}

export default App;
