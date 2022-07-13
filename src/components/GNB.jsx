import React, { useEffect, useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';
import { LOGO_URL } from '../utils/constants';
import { theme } from '../utils/constants/theme';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';
import { AutoComplete } from './AutoComplete';
import { FaTrash } from 'react-icons/fa';
import { debounce } from '../utils/helpers';

export default function GNB() {
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const debounceHandler = debounce((event) => {
    const { value } = event.target;
    setKeyword(value);
    console.log('🎉 호출 🎉');
  }, 300);

  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current.value = keyword;
  }, [keyword]);

  const handleClear = () => {
    setKeyword('');
  };

  return (
    <Wrapper>
      <Navigation>
        <RouterLink to="/">
          <Logo src={LOGO_URL + 'Logo_GNB.png'} />
        </RouterLink>
        <SearchBarContainer>
          <InputControl>
            <SearchBar>
              <SearchInput
                ref={inputRef}
                placeholder="🔍 영화 검색"
                onKeyUp={debounceHandler}
                onFocus={() => setIsInputFocused(true)}
                onBlur={() => setIsInputFocused(false)}
              />
            </SearchBar>
            <Button onClick={handleClear}>
              <StyledFaTrash />
            </Button>
          </InputControl>
          <AutoCompleteContainer>
            <AutoComplete isActive={isInputFocused} />
          </AutoCompleteContainer>
        </SearchBarContainer>
        <TabLink to="my-list">즐겨찾기</TabLink>
      </Navigation>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  height: 57px;
  background-color: ${({ theme }) => theme.bg.secondary};
  width: 100%;
  padding: 10px;
  position: sticky;
  padding: 1rem;
  z-index: 1;
`;

const Navigation = styled.nav`
  width: 100%;
  min-width: 320px;
  max-width: 1200px;
  padding: 0 4px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: auto 400px auto;
  @media ${theme.deviceSize.mobile} {
    grid-template:
      [row1-start] 'logo page' [row1-end]
      [row2-start] 'search search' [row2-end] / 1fr 1fr;
    & > *:nth-child(2) {
      order: 3;
    }
    padding: 1rem;
  }
`;

const Logo = styled.img`
  height: 30px;
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
  @media ${theme.deviceSize.mobile} {
    width: 200%;
    margin-top: 4px;
  }
`;
const SearchBar = styled.form`
  width: 100%;
  height: 100%;
`;
const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.text.strong};
`;
const Button = styled.button`
  box-sizing: border-box;
  outline: 0;
  border: 0;
  height: 30px;
  background-color: transparent;
`;
const StyledFaTrash = styled(FaTrash)`
  color: ${({ theme }) => theme.text.medium};
`;

const AutoCompleteContainer = styled.section`
  position: relative;
  width: 100%;
`;

const TabLink = styled(RouterLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.text.strong};
  display: flex;
  justify-content: end;
  align-items: center;
  height: 30px;
  font-size: 14px;
`;
