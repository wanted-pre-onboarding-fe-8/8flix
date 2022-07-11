import React, { useState, useEffect, useRef } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import { useRecoilState } from 'recoil';
import { keywordState } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

export default function Main() {
  const { movies, getMovies, searchMovies, patchMovieById } = useMovieModel();
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [keyword] = useRecoilState(keywordState);
  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);
  const { targetRef, initShowNum, showNum, InfiniteScrollBox } =
    useInfiniteScroll();

  useEffect(() => {
    if (keyword !== '') {
      initShowNum();
      searchMovies(keyword);
    }
  }, [keyword]);

  const handleCardClick = (movieId) => {
    const [movie] = movies.filter((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    openModal();
  };

  const handleLikeClick = (movieId, movieLike) => {
    patchMovieById(movieId, { like: !movieLike }).then(() =>
      searchMovies(keyword)
    );
  };

  const isEmpty = !movies || movies?.length === 0;

  return (
    <>
      {isEmpty && <EmptyContainer>영화 검색을 해주세요.</EmptyContainer>}
      {!isEmpty && (
        <>
          <Container>
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
      )}
      <div ref={targetRef} />
    </>
  );
}

const EmptyContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 600;
`;

const Container = styled.main`
  max-width: 1200px;
  margin: auto;
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
    grid-template-columns: repeat(2, 1fr);
  }
`;
