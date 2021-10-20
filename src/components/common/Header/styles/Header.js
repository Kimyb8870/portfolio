import styled from "styled-components/macro";
import { css } from "styled-components";
import palette from "../../../../lib/styles/palette";
import Responsive from "../../Responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9999;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
  background: transparent;
  transition: all 500ms;

  ${(props) =>
    props.isWhite &&
    css`
      background: white;
    `}
`;

export const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;

  @media (max-width: 768px) {
    padding: 1rem 2rem;
    flex-direction: column;
  }

  .logo {
    color: ${palette.gray[9]};
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1.5px;

    @media (max-width: 768px) {
      align-self: flex-start;
    }
  }
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    padding: 1rem;

    ${(props) =>
      !props.headerOpen &&
      css`
        display: none;
      `}
  }
`;

export const StyledMenuIcon = styled(MenuIcon)`
  &.MuiSvgIcon-root {
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: fixed;
      right: 1rem;
    }
  }
`;

export const StyledCloseIcon = styled(CloseIcon)`
  &.MuiSvgIcon-root {
    display: none;

    @media (max-width: 768px) {
      display: block;
      position: fixed;
      right: 1rem;
    }
  }
`;

export const LinkItem = styled.a`
  color: ${palette.gray[8]};
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  border-radius: 10px;
  font-weight: 600;
  transition: all 200ms;
  text-align: center;
  width: 100%;

  &:hover {
    background: rgba(0, 0, 0, 0.25);
    color: white;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
  }
`;
