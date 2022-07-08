import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from '../utils/constants/theme';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';

export default function GNB() {
  const navigate = useNavigate();
  const keyword = useRecoilState(keywordState);

  const handleSubmit = (event) => {
    /*검색 처리*/
    event.preventDefault();
  };

  return (
    <Wrapper>
      <Navigation>
        <Section>
          <Logo
            to="/"
            src="https://wfiot2018.iot.ieee.org/files/2016/01/sample-logo@2x.png"
            onClick={() => navigate('/')}
          />
        </Section>
        <SearchBar onSubmit={handleSubmit}>
          <input
            placeholder="🔍 영화 검색"
            onChange={(event) => console.log(event)}
          />
        </SearchBar>
        <Section>
          <TabLink to="my-list">즐겨찾기</TabLink>
        </Section>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: black;
  width: 100vw;
  padding: 10px;
  position: sticky;
  top: 0;
  min-width: 320px;
`;

const Navigation = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  @media ${theme.deviceSize.mobile} {
    justify-content: space-between;
    padding: 0;
    gap: 15px;
  }
`;

const Section = styled.div`
  flex: 1 0 127px;
  @media ${theme.deviceSize.mobile} {
    flex: 0 0 80px;
  }
`;

const Logo = styled.img`
  height: 2rem;
  &:hover {
    cursor: pointer;
  }
`;

const TabLink = styled(RouterLink)`
  display: block;
  width: fit-content;
  height: 100%;
  color: white;
  text-decoration: none;
  text-align: right;
  float: right;
  @media ${theme.deviceSize.mobile} {
    width: 60px;
  }
`;

const SearchBar = styled(Section).attrs({ as: 'form' })`
  flex-grow: 1;
  & > input {
    border-radius: 8px;
    padding: 8px;
    width: 100%;
    @media ${theme.deviceSize.mobile} {
      padding: 8px 4px;
    }
  }
`;
