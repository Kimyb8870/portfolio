import styled from "styled-components/macro";
import { css } from "styled-components";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";

export const StyledContact = styled.div``;

export const Wrapper = styled(Responsive)`
  padding-top: 6rem;
  padding-bottom: 4rem;
`;

export const Description = styled.p`
  color: ${palette.gray[5]};
  text-align: center;
  margin-top: 3rem;
`;

export const EmailLink = styled.a`
  font-size: 2rem;
  text-decoration: none;
  color: ${palette.cyan[5]};
  display: block;
  text-align: center;
  margin-top: 0.5rem;
  font-weight: 600;
`;

export const GithubLink = styled.a`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  .MuiSvgIcon-root {
    width: 2.5rem;
    height: 2.5rem;
    fill: ${palette.gray[7]};
    transition: all 200ms;

    &:hover {
      fill: ${palette.gray[6]};
    }
  }
`;
