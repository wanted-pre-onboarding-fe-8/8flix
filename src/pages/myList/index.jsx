import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { myListSelector, searchSelector, sortSelector } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import MyListCard from './MyListCard';
import { useMovie } from '../../models/useMovie';

const ORDER_ID = 'id';
const ORDER_RATING = 'rating';
const ORDER_YEAR = 'year';
const ORDER_RUNTIME = 'runtime';

export default function Main() {
  const { patchMovieById } = useMovie();
  const [order, setOrder] = useState(ORDER_ID);

  const movies = useRecoilValue(
    sortSelector({ movieSelector: searchSelector(myListSelector), order })
  );

  const duration = 500;
  const { isOpen, isFadeIn, openModal, closeModal } = useModal(duration);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleCardClick = (movieId) => {
    const movie = movies.find((movie) => movie.id === movieId);
    setSelectedMovie(movie);
    openModal();
  };
  const handleLikeClick = (movieId, movieLike) => {
    patchMovieById(movieId, { like: !movieLike });
  };

  return (
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
        {movies?.map((movie, movieCount) => {
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

const Container = styled.main`
  margin: 0 auto;
  max-width: 1200px;
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
    grid-template-columns: repeat(5, minmax(150px, auto));
  }
  @media ${theme.deviceSize.tablet} {
    grid-template-columns: repeat(3, minmax(200px, auto));
  }
  @media ${theme.deviceSize.mobile} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
