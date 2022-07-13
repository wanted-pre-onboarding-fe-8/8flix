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
  background-color: #141414;
  color: #fff;
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  width: 100%;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
`;

const Li = styled.li`
  border-top: 1px solid gray;
  height: 30px;
  padding-left: 10px;
  line-height: 30px;
  font-size: 12px;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  @media ${theme.deviceSize.mobile} {
    padding-left: 4px;
  }

  &:hover {
    background-color: #d3d3d3;
    color: white;
    cursor: pointer;
  }
`;

const NoSearch = styled.li`
  padding-left: 10px;
  color: gray;
  border-top: 1px solid gray;
  height: 30px;
  line-height: 30px;
  font-size: 12px;
  @media ${theme.deviceSize.mobile} {
    padding-left: 4px;
  }
`;
