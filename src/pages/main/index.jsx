import React, { useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';

export default function Main() {
  const { movies, getMovies } = useMovieModel();

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <Container>
      <Title>Main</Title>
      <MovieSection>
        {movies.map(({ id, type, year, title, poster }) => {
          return <li key={id}>{title}</li>;
        })}
      </MovieSection>
    </Container>
  );
}

const Container = styled.main``;
const Title = styled.h1`
  text-align: center;
`;
const MovieSection = styled.section`
  display: grid;
  grid-gap: 1rem;
  margin-top: 1rem;
  padding: 0 1rem;
  @media ${theme.media.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${theme.deviceSize.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
