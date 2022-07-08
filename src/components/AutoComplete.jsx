import React, { useEffect } from 'react';
import { useMovieModel } from '../models/useMovieModel';
import styled from 'styled-components';

export default function AutoComplete() {
  const { lists, getMoviesByLists } = useMovieModel();

  useEffect(() =>{
    getMoviesByLists();
  }, []);

  const [recommendList, setRecommendList] = React.useState([]);
  const [isActive, setIsActive] = React.useState(true);
  const [input, setInput] = React.useState('');

  const onChange = (event) => {
    let filterList = [];
    let keyword = event.target.value;
    setInput(keyword);

    if (keyword !== '') {
      const regex = new RegExp(`^${keyword}`, 'i');
      filterList = lists.filter((keyword) => regex.test(keyword)).sort(sortASC);
      setRecommendList(filterList);
    } else {
      setRecommendList([]);
    }

    if (filterList.length === 0 && keyword.length > 0) {
      setIsActive(false);
    } else {
      setIsActive(true);
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
    // 이름이 같을 경우
    return 0;
  };

  const onClick = (event) => {
    setInput(event.target.innerText);
  };

  return (
    <>
      <Ul>
        <SearchBar
          placeholder="🔍 영화 검색"
          onChange={onChange}
          value={input}
        />
        {isActive ? (
          recommendList.map((recommend, index) => (
            <Li key={index} onClick={onClick}>
              {recommend}
            </Li>
          ))
        ) : (
          <Li>검색어 없음</Li>
        )}
      </Ul>
    </>
  );
}

const Ul = styled.ul`
  list-style: none;
  padding-top: 10px;
  height: 52px;
`;

const Li = styled.li`
  position: relative;
  background-color: #fff;
`;

const SearchBar = styled.input`
  border-radius: 8px;
  padding: 8px;
  @media screen and (min-width: 320px) and (max-width: 768px) {
    padding: 4px 0;
  }
`;
