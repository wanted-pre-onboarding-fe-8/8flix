import React from 'react';
import styled from 'styled-components';

export default function Card(/*{card}*/) {
  const card = {
    title: 'You Are the Apple of My Eye',
    year: '2011',
    id: 'tt2036416',
    type: 'movie',
    poster:
      'https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg',
    like: false,
  };

  return (
    <CardWrapper>
      <Figure>
        <Image src={card.poster} alt={card.title} />
      </Figure>
      <Title>{card.title}</Title>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  margin-right: 1rem;
  width: 240px;
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
