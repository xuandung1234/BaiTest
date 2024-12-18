import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const GameCardContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  animation: ${slideRight} 0.5s ease-in-out;
`;

export const GameCardItem = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 375px;
  flex: 1;
  padding: 0 5px;
`;

export const GameCardDescription = styled.div`
  display: flex;
  margin-top: 30px;
  & h5 {
    font-family: PingFang SC;
    font-size: 19.22px;
    font-weight: 600;
    line-height: 23px;
    text-align: left;
    margin: 0 0 8px 0;
  }

  & p {
    font-family: PingFang SC;
    font-size: 13.67px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    margin: 0;
  }

  & .description {
    margin: 0 20px;

    & p {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      -webkit-line-clamp: 2;
    }
  }

  & .button-wrapper {
    display: flex;
    align-items: center;
    align-items: center;

    & button {
      width: 75px;
      height: 28px;
      top: 282.41px;
      left: 415px;
      padding: 7px 21.61px 7px 21.81px;
      gap: 0px;
      border-radius: 3px;
      border: 1px;
      opacity: 0px;
      cursor: pointer;
    }
  }
`;