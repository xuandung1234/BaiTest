import styled from "styled-components";

const underlineStyles = () => `
  content: "";
  position: absolute;
  height: 1px;
  background: black;
  transition: all 0.5s;
  bottom: 0;
  right: 0;
`;

export const SideMenuMobile = styled.div`
  display: flex;
  border-bottom: 1px solid #ECECEC;
  & div {
    font-family: PingFang SC;
    font-size: 0.625rem;
    font-weight: 600;
    line-height: 10px;
    text-align: center;
    align-items: center;
    display: flex;
    padding: 1.25rem 0;
    width: 25%;
    justify-content: center;
    flex-direction: column;
    color: #CCCCCC;
    cursor: pointer;
    row-gap: 6px;
    position: relative;

    &:hover {
      color: black;
      &:after {
        width: 100%;
        left: 0;
      }
    }

    &::after {
      ${underlineStyles()}
      width: 0;
    }

    &.active-item {
      color: black;
      &::after {
        ${underlineStyles()}
        width: 100%;
      }
    }
    
    &.border-filter {
      border-left: 1px solid #CCCCCC;
    }
  }

  @media (min-width: 1224px) {
    display: none;
  }
`;