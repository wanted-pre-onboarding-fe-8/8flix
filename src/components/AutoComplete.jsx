import React, { useEffect } from 'react';
import { useMovieModel } from '../models/useMovieModel';
import { useRecoilState } from 'recoil';
import { keywordState } from '../recoil';

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
    let filterList = [];
    if (keyword !== '') {
      const regex = new RegExp(`^${keyword}`, 'i');
      filterList = lists.filter((keyword) => regex.test(keyword)).sort(sortASC);
      setRecommendList(filterList);
    } else {
      setRecommendList([]);
    }
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

  const onClick = (event) => {
    const { innerText } = event.target;
    setKeyword(innerText);
    setRecommendList(() => []);
    setIsActive(false);
  };

  return (
    <>
      {isActive && (
        <Div>
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
        </Div>
      )}
    </>
  );
}
