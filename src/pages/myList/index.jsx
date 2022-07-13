import React, { useState } from 'react';
import { useRecoilValue } from 'recoil';
import { myListSelector, searchSelector, sortSelector } from '../../recoil';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { useModal, Modal } from '../../components/Modal';
import Detail from '../detail';
import Card from '../../components/Card';
import { useMovie } from '../../models/useMovie';

const ORDER_ID = 'id';
const ORDER_RATING = 'rating';
const ORDER_YEAR = 'year';
const ORDER_RUNTIME = 'runtime';

export default function MyList() {
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
    <>
      <Divider />
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
              <Card
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
          {selectedMovie && (
            <Detail movie={selectedMovie} closeModal={closeModal} />
          )}
        </Modal>
      </Container>
    </>
  );
}

const Container = styled.main`
  max-width: 1200px;
  margin: auto;
  padding-top: 2rem;
`;

const Divider = styled.div`
  width: 100%;
  min-width: 350;
  max-width: 1200px;
  height: 1px;
  background-color: #fff;
  margin: 0 auto;
`;

const MenuSection = styled.section`
  display: flex;
  gap: 4px;
`;
const Button = styled.button`
  background-color: transparent;
  color: ghostwhite;
  font-size: 18px;
  border-radius: 4px;
  border: #fff solid 1px;
  cursor: pointer;
`;

const MovieSection = styled.section`
  padding-top: 3rem;
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
