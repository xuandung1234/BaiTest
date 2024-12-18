import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  overflow-x: hidden;
  width: 100%;
`;

export const AppContent = styled.div`
  max-width: 1920px;
  flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  align-items: center;

  & .category-styles {
    margin-top: 85px;
  }
`;

export const Content = styled.div`
  display: flex;
  margin: 5em 0 0 0;
  max-width: 1240px;
  gap: 40px;
  @media (max-width: 1224px) {
    margin: 0;
    max-width: 90%;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 767px) {
    margin: 0;
    max-width: 390px;
    justify-content: center;
    flex-direction: column;
  }

  & .title {
    font-family: PingFang SC;
    font-size: 28.36px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    margin: 0px;
  }
`;

export const TitlePagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 0 5px;
`;

export const PaginationArrows = styled(TitlePagination)`
  display: flex;
  align-items: center;
  gap: 20px;
  i {
    cursor: pointer;
    color: lightgray;
    &:hover,
    &.active-item {
      color: black;
    }
    &.disabled-item {
      cursor: not-allowed;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const LoadMoreButtonContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }

  & button {
    width: 100%;
    border-radius: 14px;
    height: 3.125rem;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;

    font-family: PingFang SC;
    font-size: 15px;
    font-weight: 600;
    line-height: 48px;
  }
`;

export const PaginationDotsContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
  padding: 10px;
  display: flex;
  justify-content: center;
  margin: 1.25rem;
  @media (min-width: 769px) {
    display: none;
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
    color: #9B9B9B;
    opacity: 0.6;
    font-size: 7px;
  }
  &:hover,
  &.active-page {
    border: 1px solid #9B9B9B;
    i {
      opacity: 1;
    }
    scale: 1.1;
  }
`;

export const ReleaseButtonContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
  & button {
    width: 9.375rem;
    height: 1.75rem;
    border-radius: 2px;
    border: none;
    justify-content: space-between;
    display: flex;
    align-items: center;
    padding: 0.625rem;
    cursor: pointer;
  }
`;

