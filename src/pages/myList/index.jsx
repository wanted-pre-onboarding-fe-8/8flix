import React, { useState, useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { useRecoilValue } from 'recoil';
import { keywordState } from '../../recoil';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import MyListCard from './MyListCard';

export default function Main() {
  const { movies, getMovies, searchLikedMovies, patchMovieById } =
    useMovieModel();
  const keyword = useRecoilValue(keywordState);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);

  const handleCardClick = (movieId) => {
    const [movie] = movies.filter((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    openModal();
  };
  const handleLikeClick = (movieId, movieLike) => {
    patchMovieById(movieId, { like: !movieLike }).then(
      searchLikedMovies(keyword)
    );
  };
  useEffect(() => {
    console.log('render 시작');
    searchLikedMovies(keyword);
    console.log('render 끝');
  }, [keyword]);

  return (
    <Container>
      <MovieSection>
        {movies?.map((movie) => {
          return (
            <MyListCard
              key={movie.id}
              movie={movie}
              handleCardClick={handleCardClick}
              handleLikeClick={handleLikeClick}
            />
          );
        })}
      </MovieSection>
      <Modal
        isOpen={isOpen}
        isFadeIn={isFadeIn}
        duration={duration}
        closeModal={closeModal}
      >
        {selectedMovie && <Detail movie={selectedMovie} />}
      </Modal>
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
  @media ${theme.deviceSize.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${theme.deviceSize.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media ${theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
