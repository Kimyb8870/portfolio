import styled from "styled-components/macro";
import { css } from "styled-components";
import palette from "../../../lib/styles/palette";
import Responsive from "../../common/Responsive";

export const StyledSkill = styled.div`
  background: ${palette.cyan[5]};
  padding-bottom: 6rem;
  padding-top: 6rem;
`;

export const Wrapper = styled(Responsive)``;

export const StyledBadgeWrapper = styled.div`
  margin-top: 4rem;
`;

export const BadgeTitle = styled.h4`
  font-size: 2rem;
  color: white;
  border-bottom: 2px solid white;
  padding-bottom: 1rem;
  font-family: Jalnan;
`;

export const BadgeList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  grid-gap: 30px;
  margin-top: 2rem;
`;

export const BadgeItem = styled.li`
  justify-self: center;
  align-self: center;

  ${(props) =>
    props.noCenter &&
    css`
      justify-self: flex-start;
    `}
`;

export const ImgIcon = styled.img`
  display: block;
  width: 100px;
  border-radius: 50%;

  ${(props) =>
    props.noRadius &&
    css`
      border-radius: 0;
    `}

  ${(props) =>
    props.larger &&
    css`
      width: 150px;
    `}
`;
