import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { PUBLIC_PATH, LOGO_URL } from '../utils/constants';
import { theme } from '../utils/constants/theme';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';
import { AutoComplete } from './AutoComplete';
export default function GNB() {
  const [keyword, setKeyword] = useRecoilState(keywordState);

  const handleSubmit = (event) => {
    event.preventDefault();
    const [input] = event.target.elements;
    setKeyword(input.value);
  };

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };

  return (
    <Wrapper>
      <Navigation>
        <Section>
          <a href="/">
            <Logo src={LOGO_URL + 'Logo_GNB.png'} />
          </a>
        </Section>
        <SearchDiv>
          <SearchBar onSubmit={handleSubmit} isRadius={keyword}>
            <input
              placeholder="🔍 영화 검색"
              onChange={handleChange}
              value={keyword}
            />
          </SearchBar>
          <AutoComplete />
        </SearchDiv>
        <Section>
          <TabLink to="my-list">즐겨찾기</TabLink>
        </Section>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  height: 57px;
  background-color: black;
  width: 100%;
  padding: 10px;
  position: sticky;
  top: 0;
  min-width: 320px;
  z-index: 1;
`;

const Navigation = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-shrink: 1;
  justify-content: center;
  align-items: center;
  &:first-child {
    padding-left: 0.5rem;
  }
  &:last-child {
    padding-right: 1rem;
  }
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
  /* flex-grow: 1; */
  width: 400px;
  & > input {
    height: 30px;
    width: 100%;
    padding-left: 10px;
    /* border-radius: ${(props) =>
      props.isRadius === '' ? '8px' : '8px 8px 0px 0px'}; */
    @media ${theme.deviceSize.mobile} {
      padding: 8px 4px;
    }
  }
  @media ${theme.deviceSize.mobile} {
    width: 200px;
  }
`;

const SearchDiv = styled.div`
  height: inherit;
  padding: 3px;
`;
