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
      <Image src={movie.large_cover_image} alt={movie.title} />
      <ContentOverlay>
        <Title>{movie.title}</Title>
        <ControlWrapper>
          <Button onClick={() => handleLikeClick(movie.id, movie.like)}>
            {movie.like ? <AiFillStar /> : <AiOutlineStar />}
          </Button>
          <Button onClick={() => handleCardClick(movie.id)}>
            <RiArrowDownSLine />
          </Button>
        </ControlWrapper>
      </ContentOverlay>
    </CardWrapper>
  );
}

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 0;
  > :nth-child(1) {
    z-index: 2;
  }
  > :nth-child(2) {
    z-index: 3;
  }
  @media ${theme.deviceSize.pc} {
    &:hover {
      > :nth-child(2) {
        visibility: visible;
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
      > :nth-child(2) {
        visibility: visible;
      }
      > * {
        position: absolute;
        cursor: pointer;
      }
    }
  }
  @media ${theme.deviceSize.mobile} {
    &:hover {
      > :nth-child(2) {
        visibility: visible;
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
  border-radius: 24px;
`;

const ContentOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 16px;
  border-radius: 0 0 24px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  visibility: hidden;
`;
const Title = styled.h1`
  width: 100%;
  margin: 0;
  margin-top: 6px;
  font-size: 18px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.text.medium};
`;
const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  color: ${({ theme }) => theme.text.medium};
  background-color: ${({ theme }) => theme.bg.primary};
  border: 1px solid gray;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
`;
