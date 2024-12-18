import styled from "styled-components";

export const Input = styled.input`
  padding-left: 25px;
  font-family: PingFang SC;
  font-size: 15.5px;
  font-weight: 600;
  line-height: 20px;
  text-align: left;
  height: 46px;
  gap: 0px;
  border-width: 0px 0px 1px 0px;
  border-color: #CCCCCC;
  width: 132px;

  &::placeholder {
    color: #CCCCCC;
    opacity: 1;
    font-family: PingFang SC;
    font-size: 15.5px;
    font-weight: 600;
  }

  &:focus {
    outline: 0 none;
  }
`;

export const StyledInput = styled.div`
  position: relative;
  .left-icon {
    position: absolute;
    top: 14px;
  }
`;

export const SideMenuWrapper = styled.div`
  width: 160px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1224px) {
    display: none;
  }
`;

export const SideMenuItems = styled.div`
  & div {
    font-family: PingFang SC;
    font-size: 15.13px;
    font-weight: 600;
    line-height: 20px;
    text-align: left;
    color: #CCCCCC;
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  & .active-item {
    color: black;
  }
`;