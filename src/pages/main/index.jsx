import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import {
  keywordState,
  movieState,
  searchSelector,
  sortSelector,
} from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import Card from '../../components/Card';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { useMovie } from '../../models/useMovie';

const ORDER_ID = 'id';
const ORDER_RATING = 'rating';
const ORDER_YEAR = 'year';
const ORDER_RUNTIME = 'runtime';

export default function Main() {
  const { patchMovieById } = useMovie();
  const [order, setOrder] = useState(ORDER_ID);
  const keyword = useRecoilValue(keywordState);
  const movies = useRecoilValue(
    sortSelector({ movieSelector: searchSelector(movieState), order })
  );

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
            <MenuSection>
              <Button type="button" onClick={() => setOrder(ORDER_ID)}>
                전 체
              </Button>
              <Button type="button" onClick={() => setOrder(ORDER_RATING)}>
                평점순
              </Button>
              <Button type="button" onClick={() => setOrder(ORDER_YEAR)}>
                최신순
              </Button>
              <Button type="button" onClick={() => setOrder(ORDER_RUNTIME)}>
                러닝타임
              </Button>
            </MenuSection>
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
  background-color: ${({ theme }) => theme.text.medium};
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
  padding-top: 2rem;
`;

const MenuSection = styled.section`
  display: flex;
  gap: 4px;
`;
const Button = styled.button`
  background-color: transparent;
  color: ${({ theme }) => theme.text.medium};
  font-size: 18px;
  border-radius: 4px;
  border: ${({ theme }) => theme.text.medium} solid 1px;
  cursor: pointer;
`;

const MovieSection = styled.section`
  padding-top: 2.5rem;
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
