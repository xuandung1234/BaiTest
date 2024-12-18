import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const SlideshowContainer = styled.div`
  position: relative;
  background-color: #03827e;
  width: 100%;
  height: 576px;
  overflow: hidden;
  img {
    max-width: 1440px;
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 1224px) {
    background: none;
    height: 420px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const PaginationDots = styled.div`
  position: absolute;
  display: flex;
  gap: 5px;
  bottom: 30px;
  left: 15%;
  align-items: center;
  padding: 10px;
  @media (max-width: 1224px) {
    left: 0;
    right: 0;
    justify-content: center;
    bottom: 100px;
  }
`;

export const GameDetail = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  @media (max-width: 1224px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: linear-gradient(
      360deg,
      rgba(0, 0, 0, 0.5) 10%,
      rgba(0, 0, 0, 0) 100%
    );
  }
  p {
    font-size: 25px;
    margin-bottom: 0;
  }
  span {
    margin-bottom: 30px;
  }
`;

export const PaginateDot = styled.div`
  border-radius: 50%;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  i {
    color: white;
    opacity: 0.6;
    font-size: 7px;
  }
  &:hover,
  &.active-page {
    border: 1px solid white;
    i {
      opacity: 1;
    }
    scale: 1.1;
  }
`;

export const Slide = styled.div`
  width: 100%;
  height: 100%;
  animation: ${slideRight} 0.5s ease-in-out;
  display: flex;
  justify-content: center;
`;

