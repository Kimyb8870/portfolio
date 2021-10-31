import styled from "styled-components/macro";
import css from "styled-components";
import palette from "../../../lib/styles/palette";

export const StyledFooter = styled.footer`
  background: ${palette.gray[8]};
  padding-top: 3rem;
  padding-bottom: 2rem;
`;

export const LinkItem = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  .MuiSvgIcon-root {
    fill: white;
    width: 2.5rem;
    height: 2.5rem;
  }

  span {
    color: white;
    font-size: 1.25rem;
    margin-left: 1rem;
  }
`;

export const CopyRight = styled.p`
  color: white;
  text-align: center;
  margin-top: 3rem;
`;
