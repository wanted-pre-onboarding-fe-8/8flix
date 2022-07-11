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
  color: white;
  background-color: #181717;
  border-radius: 5px;
  position: relative;
`;

const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: 5px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  transition: 200ms;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  /* margin: 1rem; */
  width: 100%;
  height: 50%;
  background-color: #181717;
  opacity: 0.7;
  left: 0;
  bottom: 0;
  position: absolute;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 1rem;
  color: yellow;
  text-align: center;
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
  /* flex-wrap: wrap; */
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
  color: white;
  background-color: #181717;
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
