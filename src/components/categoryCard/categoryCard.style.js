import styled, { keyframes } from "styled-components";

const slideRight = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

export const CategoryCardContainer = styled.div`
  display: flex;
  margin-top: 30px;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  animation: ${slideRight} 0.5s ease-in-out;
`;

export const CategoryCards = styled.div`
  display: flex;
  border-radius: 28px;
  background: #F2F2F2;
  justify-content: center;
  min-width: 375px;
  flex: 1;
  padding: 0.625rem;
  gap: 10px;
`;

export const CategoryItem = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 50%;
  gap: 10px;

  & img {
    max-width: 100%;
  }

  & .image-item {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 48%;
  }

  & .image-item-right {
    display: flex;
    justify-content: space-between;
    gap: 10px;
    max-width: 48%;
  }
`;