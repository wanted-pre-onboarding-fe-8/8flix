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
      <Image src={card.poster} alt={card.title} />
      <Title>{card.title}</Title>
    </CardWrapper>
  );
}

const CardWrapper = styled.div``;

const Image = styled.img``;

const Title = styled.p``;
