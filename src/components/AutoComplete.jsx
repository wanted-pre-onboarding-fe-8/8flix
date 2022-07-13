import React from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  keywordState,
  movieState,
  myListSelector,
  recommendsSelector,
} from '../recoil';
import styled from 'styled-components';
import { theme } from '../utils/constants/theme';
import { useLocation } from 'react-router-dom';

export function AutoComplete({ isActive }) {
  const { pathname } = useLocation();
  const isMain = pathname === '/';

  const movies = isMain ? movieState : myListSelector;
  const recommends = useRecoilValue(recommendsSelector(movies));

  const setKeyword = useSetRecoilState(keywordState);
  const onMouseDown = (event) => {
    const { innerText } = event.target;
    setKeyword(innerText);
  };

  return (
    <>
      {isActive && (
        <AutoCompleteDiv>
          <Ul>
            {recommends.length !== 0 ? (
              recommends.map((recommend, index) => (
                <Li key={index} onMouseDown={onMouseDown}>
                  <span>{recommend}</span>
                </Li>
              ))
            ) : (
              <NoSearch>검색어 없음 ❌</NoSearch>
            )}
          </Ul>
        </AutoCompleteDiv>
      )}
    </>
  );
}

const AutoCompleteDiv = styled.div`
  margin: -1px;
  position: absolute;
  width: 100%;
  @media ${theme.deviceSize.mobile} {
    width: 200%;
  }
`;

const Ul = styled.ul`
  max-height: 200px;
  overflow-y: scroll;
  background-color: ${({ theme }) => theme.searchbar.background};
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.searchbar.borderColor};
`;

const Li = styled.li`
  border-top: 1px solid ${({ theme }) => theme.searchbar.borderColor};
  height: 30px;
  padding-left: 10px;
  line-height: 30px;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  & > span {
    color: ${({ theme }) => theme.searchbar.color};
  }
  @media ${theme.deviceSize.mobile} {
    padding-left: 4px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.searchbar.hoverBg};
    color: ${({ theme }) => theme.searchbar.color};
    cursor: pointer;
  }
`;

const NoSearch = styled.li`
  padding-left: 10px;
  color: ${({ theme }) => theme.searchbar.color};
  border-top: 1px solid ${({ theme }) => theme.searchbar.borderColor};
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  @media ${theme.deviceSize.mobile} {
    padding-left: 4px;
  }
`;
