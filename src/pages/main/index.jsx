import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { keywordState, movieState, searchSelector } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useMovie } from '../../models/useMovie';

export default function Main() {
  const { patchMovieById } = useMovie();
  const keyword = useRecoilValue(keywordState);
  const movies = useRecoilValue(searchSelector(movieState));

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
    <OuterContainer>
      <Divider />
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
const OuterContainer = styled.div``;

const Divider = styled.div`
  width: 100%;
  min-width: 350;
  max-width: 1200px;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
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
