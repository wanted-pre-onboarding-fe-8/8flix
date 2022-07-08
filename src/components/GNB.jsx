import React from 'react';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export default function GNB() {
  const navigate = useNavigate();
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
        <SearchBar
          placeholder="🔍 영화 검색"
          onChange={(event) => console.log('검색어 처리')}
          onKeyDown={(event) => console.log('검색어 처리')}
        />
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
`;

const Navigation = styled.div`
  height: 100%;
  max-width: 1200px;
  padding: 0 30px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    justify-content: space-between;
    padding: 0;
  }
`;

const Section = styled.div`
  flex: 1 0 127px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    flex: 0 0 0;
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
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 60px;
  }
`;

const SearchBar = styled.input`
  flex-grow: 1;
  border-radius: 8px;
  padding: 8px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 4px 0;
  }
`;
