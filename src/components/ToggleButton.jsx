import React from 'react';
import styled from 'styled-components';
import { BsSunFill, BsMoonFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { themeState } from '../store/recoil';

function ToggleButton() {
  const [isLightMode, setIsLightMode] = useRecoilState(themeState);
  return (
    <Wrapper>
      <input
        type="checkbox"
        id="checkbox"
        onChange={(event) => {
          setIsLightMode(event.target.checked);
        }}
      />
      <Label htmlFor="checkbox">
        <BsSunFill color="pink" />
        <BsMoonFill color="yellow" />
        <Ball className={isLightMode && 'move'} />
      </Label>
    </Wrapper>
  );
}

export default ToggleButton;

const Wrapper = styled.div`
  box-sizing: border-box;
  position: fixed;
  right: 5vw;
  bottom: 5vh;
  & > input {
    opacity: 0;
    &:checked + label .move {
      transform: translateX(24px);
    }
  }
`;

const Label = styled.label`
  width: 50px;
  height: 26px;
  background-color: ${({ theme }) => theme.bg.secondary};
  display: flex;
  border-radius: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  position: relative;
  transform: scale(1.5);
`;

const Ball = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.text.xweak};
  position: absolute;
  top: 2px;
  left: 2px;
  border-radius: 50%;
  transition: transform 0.2s linear;
`;
