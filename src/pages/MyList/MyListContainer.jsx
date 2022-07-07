import React from "react";
import styled from "styled-components";
import MyList from "./MyList";

export default function MyListContainer() {
  return (
    <>
      <h1>여기는 MyListContainer</h1>
      <Container>
        <MyList />
      </Container>
    </>
  );
}
const Container = styled.div`
  width: 100%;
  background-color: orange;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    :last-child {
      margin: 30px;
    }
  }
  @media (max-width: 320px) {
  }
  @media (max-width: 375px) {
  }
  @media (max-width: 425px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 1440px) {
  }
  @media (max-width: 2560px) {
  }
`;
