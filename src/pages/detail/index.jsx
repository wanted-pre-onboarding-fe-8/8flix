import React, { useState } from 'react';
import { cutString } from '../../utils/helpers';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { IoClose } from 'react-icons/io5';
import { AiFillStar } from 'react-icons/ai';

export default function Detail({ movie, closeModal }) {
  const [isMore, setIsMore] = useState(movie.description_full.length > 200);

  return (
    <Wrapper>
      <Figure>
        <CloseButton onClick={closeModal}>
          <IoClose color="white" />
        </CloseButton>
        <Image src={movie.background_image_original} alt="background_image" />
      </Figure>
      <Contents>
        <Title>{movie.title_long}</Title>
        <InfoBox>
          <Year>{movie.year}</Year>
          <RunTime>{movie.runtime}분</RunTime>
          <RatingWrapper>
            <AiFillStar style={{ color: 'red', marginRight: '0.2rem' }} />
            <RatingText>{movie.rating} / 10</RatingText>
          </RatingWrapper>
        </InfoBox>
        <Genres>
          {movie.genres.map((genre, index) => (
            <Genre key={index}>{genre}</Genre>
          ))}
        </Genres>
        <p>
          {isMore
            ? cutString(movie.description_full, 200)
            : movie.description_full}
          <MoreButton isMore={isMore} onClick={() => setIsMore(false)}>
            더보기
          </MoreButton>
        </p>
      </Contents>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 2rem;
  margin-bottom: 3rem;
  min-width: 700px;
  max-width: 700px;
  min-height: 500px;
  background-color: #1b1b1b;
  color: #7b7b7b;
  border-radius: 10px;

  @media ${theme.deviceSize.tablet} {
    min-width: 700px;
    max-width: 700px;
  }

  @media (max-width: 768px) {
    min-width: 500px;
    max-width: 500px;
    min-height: 400px;
  }

  @media ${theme.deviceSize.mobile} {
    min-width: 0px;
  }
`;

const Figure = styled.figure`
  position: relative;
  margin: 0;
  border-radius: 10px 10px 0 0;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 10px 10px 0 0;
`;

const CloseButton = styled.button`
  margin: 1rem;
  padding: 0.4rem;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  right: 0;
  font-size: 28px;
  background-color: #141414;
  border-radius: 50%;
  cursor: pointer;
`;

const Contents = styled.div`
  flex-grow: 1;
  padding: 1rem 1.5rem;
`;

const Title = styled.h3`
  margin: 0;
  color: white;
`;

const InfoBox = styled.div`
  margin: 1rem 0;
  display: flex;

  & > * {
    margin-right: 0.4rem;
  }
`;

const Year = styled.span``;

const RunTime = styled.span``;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const RatingText = styled.span``;

const Genres = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
`;

const Genre = styled.li`
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
  padding: 0.2rem 0.4rem;
  border: 1px solid #7b7b7b;
`;

const MoreButton = styled.button`
  display: ${(props) => (props.isMore ? 'inline-block' : 'none')};
  cursor: pointer;
  color: #7b7b7b;
  background-color: transparent;
`;
