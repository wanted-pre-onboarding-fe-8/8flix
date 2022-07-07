import { useState } from "react";
import styled, { keyframes } from "styled-components";

export function useModal(duration) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFadeIn, setIsFadeIn] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsFadeIn(true);
  };
  const closeModal = () => {
    setIsFadeIn(false);
    setTimeout(() => setIsOpen(false), duration);
  };

  return { isOpen, isFadeIn, openModal, closeModal };
}

export function Modal({ isOpen, isFadeIn, duration, closeModal, children }) {
  return (
    <>
      {isOpen && (
        <Overlay isFadeIn={isFadeIn} duration={duration} closeModal={closeModal}>
          {children}
        </Overlay>
      )}
    </>
  );
}

function Overlay({ isFadeIn, duration, closeModal, children }) {
  return (
    <Wrapper isFadeIn={isFadeIn} duration={duration} onClick={closeModal}>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;

  animation: ${(props) => (props.isFadeIn ? fadeIn : fadeOut)};
  animation-duration: ${(props) => `${props.duration + 100}ms`};
`;

const fadeIn = keyframes`
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
`;
const fadeOut = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
`;
