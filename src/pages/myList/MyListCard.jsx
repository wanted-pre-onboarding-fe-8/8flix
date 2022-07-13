import React from 'react';
import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function MyListCard({
  movie,
  handleCardClick,
  handleLikeClick,
}) {
  return (
    <CardWrapper>
      <Figure>
        <Image src={movie.large_cover_image} alt={movie.title} />
      </Figure>
      <Content>
        <Title>{movie.title}</Title>
        <Description>{movie.description_full}</Description>
        <Genres>
          {movie.genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </Genres>
        <CardButtonWrapper>
          <CardButton onClick={() => handleLikeClick(movie.id, movie.like)}>
            {movie.like ? <AiFillStar /> : <AiOutlineStar />}
          </CardButton>
          <CardButton onClick={() => handleCardClick(movie.id)}>
            <RiArrowDownSLine />
          </CardButton>
        </CardButtonWrapper>
      </Content>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 400px;
  color: ${({ theme }) => theme.text.strong};
  background-color: ${({ theme }) => theme.bg.primary};
  border-radius: 5px;
  position: relative;
`;

const Figure = styled.figure`
  flex-grow: 1;
  margin: 0;
  overflow: hidden;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.bg.primary};
  opacity: 0.9;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Genres = styled.ul`
  font-size: 1rem;

  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Genre = styled.li`
  margin-right: 0.5rem;
  font-size: 13px;
`;

const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.text.strong};
  background-color: ${({ theme }) => theme.bg.primary};
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid gray;
  }

  & > * {
    font-size: 24px;
  }
`;
