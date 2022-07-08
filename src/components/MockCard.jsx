import React from 'react';
import styled from 'styled-components';

export default function Card({ movie, onDelete }) {
  return (
    <CardWrapper>
      <Figure>
        <Image src={movie.large_cover_image} alt={movie.title} />
      </Figure>
      <Title>{movie.title}</Title>
      <button type="submit" onClick={onDelete}>
        삭제하기
      </button>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-right: 1rem;
  width: 240px;
  margin: auto;
`;

const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
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
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
