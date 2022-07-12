import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { LOGO_URL } from '../utils/constants';
import { theme } from '../utils/constants/theme';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';
import { AutoComplete } from './AutoComplete';
import { FaTrash } from 'react-icons/fa';

export default function GNB() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const handleChange = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };

  const handleClear = () => {
    setKeyword('');
  };

  return (
    <Wrapper>
      <Navigation>
        <Logo src={LOGO_URL + 'Logo_GNB.png'} />
        <SearchBarContainer>
          <InputControl>
            <SearchBar onSubmit={handleSubmit} isRadius={keyword}>
              <SearchInput
                placeholder="🔍 영화 검색"
                onChange={handleChange}
                value={keyword}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
            </SearchBar>
            <Button onClick={() => setKeyword('')}>
              <FaTrash />
            </Button>
          </InputControl>
          <AutoCompleteContainer>
            <AutoComplete />
          </AutoCompleteContainer>
        </SearchBarContainer>
        <TabLink to="my-list">
          <TextBox>즐겨찾기</TextBox>
        </TabLink>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  background-color: #141414;
  position: sticky;
  z-index: 1;
`;

const Navigation = styled.nav`
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
  display: grid;
  grid-template-columns: auto 400px auto;
  @media ${theme.deviceSize.mobile} {
  }
`;

const Logo = styled.img`
  height: 2rem;
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`;

const SearchBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
`;
const InputControl = styled.div`
  display: flex;
  align-items: center;
  width: 400px;
  height: 30px;
`;
const SearchBar = styled.form`
  width: 100%;
  height: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
`;
const Button = styled.button`
  outline: 0;
  border: 0;
  height: 30px;
  background-color: #fff;
  cursor: pointer;
`;

const AutoCompleteContainer = styled.section`
  position: relative;
  width: 100%;
`;

const TabLink = styled(RouterLink)`
  text-decoration: none;
  color: #fff;
  display: flex;
  justify-content: end;
  align-items: center;
  font-size: 1.2rem;
`;
const TextBox = styled.span`
  padding: 0.5rem;
  border: 1px solid #fff;
`;
