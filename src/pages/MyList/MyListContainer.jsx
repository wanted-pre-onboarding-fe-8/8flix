import React from "react";
import styled from "styled-components";
import MyList from "./MyList";

export default function MyListContainer() {
  return (
    <>
      <Container>
        <Description>
          <Title>MyList</Title>
          <More>더 보기</More>
        </Description>
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
const Description = styled.div`
  width: 100%;
  background-color: #eaeaea;
  padding: 30px;
  box-sizing: border-box;

  margin: auto;
  display: flex;
  justify-content: space-between;
`;
const Title = styled.div`
  --font-size: 18px;
  --font-weight: 700;

  display: block;
  width: 300px;
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  color: white;
  background-color: green;
`;
const More = styled.div`
  width: 200px;
  color: white;
  background-color: green;
`;
