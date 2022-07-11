import React, { useState, useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { useRecoilValue } from 'recoil';
import { keywordState } from '../../recoil';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import MyListCard from './MyListCard';
import Card from '../../components/Card';
export default function Main() {
  const { movies, getMovies, searchLikedMovies, patchMovieById } =
    useMovieModel();
  const keyword = useRecoilValue(keywordState);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);
  const [order, setOrder] = useState('id');
  const sortedMovies = movies?.sort((a, b) => b[order] - a[order]);
  const handleAllSorted = () => {
    setOrder('id');
  };
  const handleRatingSorted = () => {
    setOrder('rating');
  };
  const handleYearSorted = () => {
    setOrder('year');
  };
  const handleRuntimeSorted = () => {
    setOrder('runtime');
  };

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
    searchLikedMovies(keyword);
  }, [keyword]);

  if (!movies || movies.length === 0)
    return <EmptyContainer>검색 결과가 없습니다.</EmptyContainer>;
  return (
    <Container>
      <MenuSection>
        <Button type="button" onClick={() => handleAllSorted()}>
          전 체
        </Button>
        <Button type="button" onClick={() => handleRatingSorted()}>
          평점순
        </Button>
        <Button type="button" onClick={() => handleYearSorted()}>
          최신순
        </Button>
        <Button type="button" onClick={() => handleRuntimeSorted()}>
          러닝타임
        </Button>
      </MenuSection>
      <MovieSection>
        {sortedMovies?.map((movie, movieCount) => {
          return (
            <MyListCard
              key={movie.id}
              movie={movie}
              movieCount={movieCount + 1}
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
  min-width: 320px;
`;
const Title = styled.h1`
  text-align: center;
`;

const MenuSection = styled.section`
  display: flex;
  flex-wrap: nowrap;
  grid-gap: 0.1rem;
  margin-top: 1rem;
  padding: 0 0.1rem;
`;
const Button = styled.button`
  text-align: center;
  background-color: #e8e8e8;
  width: 5rem;
  height: 2rem;
  font-size: 0.8rem;
  padding: 0 1rem;
  border-radius: 5px;
  cursor: pointer;
  &:first-child {
    margin-left: auto;
  }
  &:last-child {
    margin-right: auto;
  }
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
