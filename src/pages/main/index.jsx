import React, { useState, useEffect, useRef } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import { useRecoilState } from 'recoil';
import { keywordState } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import useIntersectionObserver from '../../hooks/useInterceptionObserver';

export default function Main() {
  const { movies, getMovies, searchMovies, patchMovieById } = useMovieModel();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [keyword] = useRecoilState(keywordState);
  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);
  const [showNum, setShowNum] = useState(10);
  const movieSectionRef = useRef(null);
  const [ref] = useIntersectionObserver(movieSectionRef, () => {
    setShowNum((pre) => pre + 10);
  });

  useEffect(() => {
    searchMovies(keyword);
  }, [keyword]);

  const handleCardClick = (movieId) => {
    const [movie] = movies.filter((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    openModal();
  };

  const handleLikeClick = (movieId, movieLike) => {
    patchMovieById(movieId, { like: !movieLike }).then(getMovies);
  };

  return (
    <>
      <Container>
        <Title>Main</Title>
        <MovieSection>
          {movies?.slice(0, showNum).map((movie) => {
            return (
              <Card
                key={movie.id}
                movie={movie}
                handleCardClick={handleCardClick}
                handleLikeClick={handleLikeClick}
              />
            );
          })}
        </MovieSection>
        <div
          ref={ref}
          style={{
            width: '30px',
            height: '300px',
            isVisibility: true,
          }}
        />
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
