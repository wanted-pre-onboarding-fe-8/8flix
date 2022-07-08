import React, { useEffect } from 'react';
import { useMovieModel } from '../../models/useMovieModel';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import MockCard from '../../components/MockCard';
import { useRecoilValue } from 'recoil';
import { keywordState } from '../../recoil';

export default function Main() {
  const { movies, searchMovies } = useMovieModel();
  const keyword = useRecoilValue(keywordState);

  const onClickCallback = (id, data) => {
    patchMovieById(id, data).then(getMovies);
  };
  const onClickDelete = (id, data) => {
    onClickCallback(id, data);
  };
  useEffect(() => {
    searchMovies(keyword);
  }, [keyword]);

  return (
    <Container>
      <Title>Main</Title>
      <MovieSection>
        {movies?.map((movie) => {
          return (
            !movie.like && (
              <MockCard
                key={movie.id}
                movie={movie}
                onDelete={() => onClickDelete(movie.id, { like: false })}
              />
            )
          );
        })}
      </MovieSection>
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
    grid-template-columns: repeat(5, 1fr);
  }
  @media ${theme.deviceSize.tablet} {
    grid-template-columns: repeat(3, 1fr);
  }
  @media ${theme.deviceSize.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
