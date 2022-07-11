import React, { useEffect } from 'react';
import { useMovieModel } from '../models/useMovieModel';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';
import styled from 'styled-components';
import { theme } from '../utils/constants/theme';

export function AutoComplete() {
  const { lists, getMoviesByLists } = useMovieModel();
  const [keyword, setKeyword] = useRecoilState(keywordState);
  const [recommendList, setRecommendList] = React.useState([]);
  const [isActive, setIsActive] = React.useState(false);

  useEffect(() => {
    getMoviesByLists();
  }, []);

  useEffect(() => {
    onChange(keyword);
    if (keyword === '') {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  }, [keyword]);

  useEffect(() => {
    if (recommendList.length > 0) {
      setIsActive(true);
    } else if (recommendList === null) {
      setIsActive(false);
    }
  }, [recommendList]);

  const onChange = (keyword) => {
    const banRegExp = /[[]/gi;
    if (banRegExp.test(keyword)) {
      setKeyword('');
      return;
    }
    let filterList = [];
    if (keyword !== '') {
      const regex = new RegExp(`^${keyword}`, 'i');
      filterList = lists.filter((list) => regex.test(list)).sort(sortASC);
      setRecommendList(filterList);
    }
  };

  const onClick = (event) => {
    const { innerText } = event.target;
    setKeyword(innerText);
    setIsActive(false);
  };

  const sortASC = (a, b) => {
    let tempA = a.toUpperCase();
    let tempB = b.toUpperCase();
    if (tempA < tempB) {
      return -1;
    }
    if (tempA > tempB) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      {isActive && (
        <AutoCompleteDiv>
          <Ul>
            {recommendList.length !== 0 ? (
              recommendList.map((recommend, index) => (
                <Li key={index} onClick={onClick}>
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
  @media ${theme.deviceSize.mobile} {
    width: 202px;
  }
`;

const Ul = styled.ul`
  background-color: #fff;
  list-style: none;
  padding-left: 0px;
  margin: 0px;
  width: 100%;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  border-bottom: 1px solid gray;
  border-top: 1px solid gray;
  border-radius: 0px 0px 8px 8px;
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
