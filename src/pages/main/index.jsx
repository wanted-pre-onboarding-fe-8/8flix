import React, { useState, useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';

export default function Main() {
  const { movies, getMovies } = useMovieModel();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);

  useEffect(() => {
    getMovies();
  }, []);

  const handleCardClick = (movieId) => {
    const movie = movies.filter((movie) => movie.id === movieId)[0];
    setSelectedMovie(movie);
    openModal();
  };

  return (
    <>
      <Container>
        <Title>Main</Title>
        <MovieSection>
          {movies?.map((movie) => {
            return (
              <Card
                key={movie.id}
                movie={movie}
                handleCardClick={handleCardClick}
              />
            );
          })}
        </MovieSection>
      </Container>
      <Modal
        isOpen={isOpen}
        isFadeIn={isFadeIn}
        duration={duration}
        closeModal={closeModal}
      >
        {selectedMovie && <Detail movie={selectedMovie} />}
      </Modal>
    </>
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
  @media ${theme.deviceSize.desktop} {
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${theme.deviceSize.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
