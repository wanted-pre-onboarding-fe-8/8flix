import React from 'react';
import styled from 'styled-components';

export default function Card({ movie, handleCardClick, handleLikeClick }) {
  return (
    <CardWrapper>
      <Figure onClick={() => handleCardClick(movie.id)}>
        <Image src={movie.large_cover_image} alt={movie.title} />
      </Figure>
      <Title>{movie.title}</Title>
      <LikeBox onClick={() => handleLikeClick(movie.id, movie.like)}>
        {movie.like ? <Like>💖</Like> : <Like>🤍</Like>}
      </LikeBox>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-right: 1rem;
  width: 240px;
  position: relative;
`;

const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Title = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
  color: gray;
`;

const Like = styled.span`
  font-size: 30px;
`;
const LikeBox = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  cursor: pointer;
`;
