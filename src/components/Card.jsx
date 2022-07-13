import React from 'react';
import styled from 'styled-components';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { RiArrowDownSLine } from 'react-icons/ri';
import { theme } from '../utils/constants/theme';

export default function MyListCard({
  movie,
  handleCardClick,
  handleLikeClick,
}) {
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
          <CardButton onClick={() => handleLikeClick(movie.id, movie.like)}>
            {movie.like ? <AiFillStar /> : <AiOutlineStar />}
          </CardButton>
          <CardButton onClick={() => handleCardClick(movie.id)}>
            <RiArrowDownSLine />
          </CardButton>
        </CardButtonWrapper>
      </Content>
      {/* <Overlay>
          <OverlayInner>
            <Title>{movie.title}</Title>
            <Controls>
              <LikeBox onClick={() => handleLikeClick(movie.id, movie.like)}>
                {movie.like ? <AiFillStar /> : <AiOutlineStar />}
              </LikeBox>
              <DetailBox onClick={() => handleCardClick(movie.id)}>
                <RiArrowDownSLine />
              </DetailBox>
            </Controls>
          </OverlayInner>
        </Overlay>
        <Image src={movie.large_cover_image} alt={movie.title} /> */}
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 400px;
  color: white;
  background-color: #181717;
  border-radius: 5px;
  position: relative;
`;
const Figure = styled.figure`
  flex-grow: 1;
  margin: 0;
  overflow: hidden;
  @media ${theme.deviceSize.pc} {
    &:hover {
      > :nth-child(1) {
        display: block;
        z-index: 3;
      }
      > :nth-child(2) {
        z-index: 2;
      }
      > * {
        position: absolute;
        transform: scale(1.2);
        cursor: pointer;
      }
    }
  }
  @media ${theme.deviceSize.tablet} {
    &:hover {
      > :nth-child(1) {
        display: block;
        z-index: 3;
      }
      > :nth-child(2) {
        z-index: 2;
      }
      > * {
        position: absolute;
        cursor: pointer;
      }
    }
  }
  @media ${theme.deviceSize.mobile} {
    &:hover {
      > :nth-child(1) {
        display: block;
        z-index: 3;
      }
      > :nth-child(2) {
        z-index: 2;
      }
      > * {
        position: absolute;
        cursor: pointer;
      }
    }
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  transition: 200ms;
`;

const Overlay = styled.div`
  display: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: pointer;
`;

const OverlayInner = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

const Content = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  background-color: #29292980;
  padding: 1rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  margin: 0;
  margin-top: 6px;
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Genres = styled.ul`
  font-size: 1rem;

  margin: 0;
  margin-bottom: 1rem;
  padding: 0;
  display: flex;
  list-style: none;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
  width: 3rem;
  height: 3rem;
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
  position: absolute;
  top: 25%;
  color: ghostwhite;
  font-size: 24px;
  font-weight: 700;
  text-align: center;
  padding: 0 8px;
  @media ${theme.deviceSize.mobile} {
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-word;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    padding: 0 4px;
  }
`;

const Controls = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  padding: 0 8px;
  padding-bottom: 16px;
`;
const LikeBox = styled.div``;
const DetailBox = styled.div``;
