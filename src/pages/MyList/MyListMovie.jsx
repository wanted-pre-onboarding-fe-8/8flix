import React from "react";
import styled from "styled-components";

export default function MyListMovie({ poster }) {
  return (
    <>
      <Container>
        <Poster src={poster} />
        <Description>
          <Title>제목</Title>
          <Year>Year</Year>
        </Description>
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: green;
  --width: 300px;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  background-size: cover;
  overflow: hidden;
`;
const Poster = styled.img`
  width: 100%;
  height: 80%;
  background-color: gray;
`;
const Description = styled.div`
  width: 300px;
  text-align: center;
`;
const Title = styled.h1`
  background-color: red;
  color: #000;
  font-size: 16px;
`;
const Year = styled.h4`
  background-color: red;
  color: #e3e3e3;
  width: 100%;
`;
