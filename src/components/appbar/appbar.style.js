import styled from "styled-components";

export const AppbarWrapper = styled.div`
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 0.500437675070028) 80%
  );
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 1;
  top: 0;
  @media (max-width: 1224px) {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.5) 10%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`;

export const AppbarContent = styled.div`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
    background-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  img {
    height: 80%;
    margin-left: 2em;
  }
  @media (max-width: 1224px) {
    padding: 10px 10px 0 10px;
    img {
      height: 80%;
      margin-left: 0;
    }
  }
`;

const underlineStyles = () => `
  content: "";
  position: absolute;
  height: 3px;
  background: white;
  transition: all 0.5s;
  bottom: 0;
  right: 0;
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 42px;
  padding-right: 9em;
  @media (max-width: 1224px) {
    padding-right: 0;
  }
  i {
    font-size: 48px;
    color: white;
  }
  & div {
    color: gray;
    padding: 2em 0;
    text-transform: uppercase;
    cursor: pointer;
    font-size: 1.025rem;
    position: relative;

    &::after {
      ${underlineStyles()}
      width: 0;
    }
    &:hover {
      color: white;
      &:after {
        width: 100%;
        left: 0;
      }
    }
    &.active-item {
      color: white;
      &::after {
        ${underlineStyles()}
        width: 100%;
      }
    }
  }
`;
