import styled from "styled-components/macro";
import palette from "../../../lib/styles/palette";
import heroBackground from "../../../assets/img/heroBackground.jpg";
import Responsive from "../../common/Responsive";

export const StyledHero = styled.div`
  height: 100vh;
  background: url(${heroBackground});
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Wrapper = styled(Responsive)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-items: center;
`;

export const StyledTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: ${palette.gray[9]};
  margin-bottom: 3rem;
`;

export const StyledText = styled.p`
  font-size: 1.125rem;
  color: ${palette.gray[9]};
`;
