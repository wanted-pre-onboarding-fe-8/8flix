import React, { useState, useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useRecoilState } from 'recoil';
import { keywordState } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';

export default function Main() {
  const { movies, searchMovies, patchMovieById } = useMovieModel();
  const [keyword] = useRecoilState(keywordState);

  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const { targetRef, initShowNum, showNum } = useInfiniteScroll();

  useEffect(() => {
    initShowNum();
  }, [keyword]);

  const handleCardClick = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    openModal();
  };

  const handleLikeClick = (movieId, movieLike) => {
    patchMovieById(movieId, { like: !movieLike });
  };

  const isEmpty = !movies || movies?.length === 0;

  return (
<<<<<<< HEAD
    <>
=======
    <OuterContainer>
      {isEmpty && <EmptyContainer>영화 검색을 해주세요.</EmptyContainer>}
>>>>>>> f4bc38d (style: 메인 페이지 배경, 글자 색상 변경)
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
            {selectedMovie && (
              <Detail movie={selectedMovie} closeModal={closeModal} />
            )}
          </Modal>
        </>
      )}
      <InfiniteScrollTargetBox ref={targetRef} />
    </OuterContainer>
  );
}
const OuterContainer = styled.div`
  background-color: #141414;
  color: #fff;
`;

const EmptyContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 600;
  @media ${theme.deviceSize.mobile} {
    font-size: 24px;
  }
`;

const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  padding-top: 1.5rem;
`;
const MovieSection = styled.section`
  display: grid;
  grid-gap: 1rem;
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

const InfiniteScrollTargetBox = styled.div`
  height: 5vh;
  width: 100vw;
`;
