import React from "react";
import styled from "styled-components";

export default function Card({ movie }) {
  return (
    <CardWrapper>
      <Figure>
        <Image src={movie.poster} alt={movie.title} />
      </Figure>
      <Title>{movie.title}</Title>
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
