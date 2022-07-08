import React from 'react';
import styled from 'styled-components';
import { IoPlay } from 'react-icons/io5';
import { AiOutlinePlus, AiOutlineCheck } from 'react-icons/ai';
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
    genres: ['Action', 'asdasd', 'asddd'],
    summary: '',
    description_full: '',
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
    like: false,
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
            <IoPlay />
          </CardButton>
          <CardButton>
            {movie.like ? <AiOutlineCheck /> : <AiOutlinePlus />}
          </CardButton>
          <CardButton>
            <RiArrowDownSLine />
          </CardButton>
        </CardButtonWrapper>
      </Content>
    </CardWrapper>
  );
}
