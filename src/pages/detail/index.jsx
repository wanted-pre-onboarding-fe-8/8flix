import React from 'react';
import styled from 'styled-components';
import { theme } from '../../utils/constants/theme';
import { cutString, getTimeStringByMinute } from '../../utils/helpers';

export default function Detail({ movie }) {
  const genres = movie.genres.slice(0, 3).join(', ');
  const summary = cutString(movie.summary, 500);
  const runtime = getTimeStringByMinute(movie.runtime);

  return (
    <Wrapper>
      <Image src={movie.background_image_original} alt="background" />
      <Section>
        <Title>{movie.title}</Title>
        <InfoBody>
          <Text>🎉 {movie.year}년</Text>
          <Text>⭐ {movie.rating}</Text>
          <Text>🕘 {runtime}</Text>
          <Text>😎 {genres}</Text>
        </InfoBody>
        {summary.length > 0 && <Text>{summary}</Text>}
      </Section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  max-width: 600px;
  border-radius: 25px;
  background-color: #fafafa;
  overflow: hidden;

  @media ${theme.deviceSize.desktop} {
    width: 600px;
  }
  @media ${theme.deviceSize.tablet} {
    width: 90%;
  }
  @media ${theme.deviceSize.mobile} {
    width: 90%;
  }
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Section = styled.section`
  padding: 10px 20px 5px 20px;
`;

const InfoBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Text = styled.p`
  padding: 0px;
  margin-top: 5px;
`;
const Title = styled(Text)`
  font-weight: 600;
`;
