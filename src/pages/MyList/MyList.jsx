import React from "react";
import MyListMovie from "./MyListMovie";
import styled from "styled-components";
import { useEffect } from "react";

export default function MyList() {
  useEffect(() => {});
  return (
    <>
      <Container>
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BZTc5NDk1NDgtMThmYy00MWViLTk2ZjUtNTQyMDI1MDI0MDRjXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BMzEzM2E2N2EtYzE2Yy00MGEyLWI5YmQtOWU3OTE1ODFjNmIxXkEyXkFqcGdeQXVyMjExMjk0ODk@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BMWU2OTAyMTktMTU5MC00MTNhLTg1NzAtOTZjNWFjMDRiZGUxXkEyXkFqcGdeQXVyNDY3MzUxOTI@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BZjI2OTJlYjQtOTAwMi00NTM1LWI0MTktYTMzZjlhNGRlMjIwXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BYzdmMWI3MDEtMTBjZS00MDQ3LWJiMjktMmU2YmJlMmVlZDcxXkEyXkFqcGdeQXVyMjUyNDk2ODc@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BMTViYTQyZjYtNDJhNC00MjcyLTk3NzctYTQxNmFkNjBmOWIwXkEyXkFqcGdeQXVyMTMxMTY0OTQ@._V1_SX300.jpg"
          }
        />
        <MyListMovie
          poster={
            "https://m.media-amazon.com/images/M/MV5BZDAzODQwNjYtZGE2OS00MTU2LWI3YjItNGZjN2JmM2RjNWJmXkEyXkFqcGdeQXVyNjczMzgwMDg@._V1_SX300.jpg"
          }
        />
      </Container>
    </>
  );
}
const Container = styled.div`
  background-color: #eaeaea;
  margin: auto;
  display: flex;
  flex-wrap: wrap; // 줄 바꿈의 수평처리
  justify-content: center; // 수평 가운데 정렬;
  /* width: 90%; */
`;
