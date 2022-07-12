import React from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default function Detail({ movie }) {
  return (
    <Wrapper>
      <Figure>
        <CloseButton>
          <IoClose />
        </CloseButton>
        <Image src={movie.background_image_original} alt="background_image" />
      </Figure>
      <Contents>
        <Title>{movie.title}</Title>
        <InfoBox>
          <Year>{movie.year}</Year>
          <RunTime>{movie.runtime}</RunTime>
          <RatingWrapper>
            <AiFillStar />
            <RatingText>{movie.rating} / 10</RatingText>
          </RatingWrapper>
        </InfoBox>
        <Genres>
          {movie.genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </Genres>
        <Preview>{movie.description_full}</Preview>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const Figure = styled.figure``;

const Image = styled.img``;

const CloseButton = styled.button``;

const Contents = styled.div``;

const Title = styled.h3``;

const InfoBox = styled.div``;

const Year = styled.span``;

const RunTime = styled.span``;

const RatingWrapper = styled.div``;

const RatingText = styled.span``;

const Genres = styled.ul``;

const Genre = styled.li``;

const Preview = styled.p``;
