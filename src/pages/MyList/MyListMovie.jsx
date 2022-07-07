import React from "react";
import styled from "styled-components";

export default function MyListMovie({ poster }) {
  return (
    <>
      <Container>
        <Poster src={poster} />
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: red;
  --width: 300px;
  width: var(--width);
  height: calc(var(--width) * 3 / 2);
  margin: 10px;
  border-radius: 4px;
  /* background-size: cover;
  overflow: hidden; */
`;
const Poster = styled.img`
  width: 100%;
  height: 80%;
  background-color: gray;
`;
const Info = styled.div``;
