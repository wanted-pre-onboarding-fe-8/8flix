import React from 'react';
import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';

export default function MyListCard(/*{movie}*/) {
  const movie = {
    id: 43134,
    imdb_code: 'tt10128118',
    title: 'Heilung - Lifa',
    title_english: 'Heilung - Lifa',
    title_long: 'Heilung - Lifa (2017)',
    slug: 'heilung-lifa-2017',
    year: 2017,
    rating: 9.4,
    runtime: 77,
    genres: ['Action', 'asdasd', 'asddd', 'asddd', 'asddd', 'asddd', 'asddd'],
    summary: '',
    description_full:
      'asdkakopkpokopkoppommmlfmlv;mvl;xcopkopkopkopokpsdkopsaa',
    synopsis: '',
    yt_trailer_code: '',
    language: 'en',
    mpa_rating: '',
    background_image:
      'https://yts.mx/assets/images/movies/heilung_lifa_2017/background.jpg',
    background_image_original:
      'https://yts.mx/assets/images/movies/heilung_lifa_2017/background.jpg',
    small_cover_image:
      'https://yts.mx/assets/images/movies/heilung_lifa_2017/small-cover.jpg',
    medium_cover_image:
      'https://yts.mx/assets/images/movies/heilung_lifa_2017/medium-cover.jpg',
    large_cover_image:
      'https://yts.mx/assets/images/movies/heilung_lifa_2017/large-cover.jpg',
    state: 'ok',
    date_uploaded: '2022-06-30 22:38:10',
    date_uploaded_unix: 1656621490,
    like: true,
  };

  return (
    <CardWrapper>
      <Figure>
        <Image src={movie.large_cover_image} alt={movie.title} />
      </Figure>
      <Content>
        <Title>{movie.title}</Title>
        <Description>{movie.description_full}</Description>
        <Genres>
          {movie.genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </Genres>
        <CardButtonWrapper>
          <CardButton>
            {movie.like ? <AiFillStar /> : <AiOutlineStar />}
          </CardButton>
          <CardButton>
            <RiArrowDownSLine />
          </CardButton>
        </CardButtonWrapper>
      </Content>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  color: white;
  background-color: #181717;
  border-radius: 5px;
`;

const Figure = styled.figure`
  margin: 0;
  overflow: hidden;
  border-radius: 5px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 200px;
  transition: 200ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  margin: 1rem;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
`;

const Description = styled.p`
  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Genres = styled.ul`
  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Genre = styled.li`
  margin-right: 0.5rem;
  font-size: 13px;
`;

const CardButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CardButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  color: white;
  background-color: #181717;
  border: 1px solid gray;
  border-radius: 50%;
  cursor: pointer;

  &:hover {
    border: 2px solid gray;
  }

  & > * {
    font-size: 24px;
  }
`;
