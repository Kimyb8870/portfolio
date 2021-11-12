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
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.3);
  }
`;

export const TextWrapper = styled(Responsive)`
  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const StyledText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const MainText = styled.p`
  font-size: 2.5rem;
  color: ${palette.gray[4]};
  font-weight: 600;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Name = styled.span`
  font-weight: 800;
  position: relative;
  letter-spacing: 2px;

  animation-name: slideDown;
  animation-duration: 1500ms;
  animation-fill-mode: forwards;

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  @keyframes slideDown {
    from {
      top: -30px;
      color: transparent;
    }

    to {
      top: 0;
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin-left: 3rem;
  }
`;

export const BreakLine = styled.br`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const SubText = styled.p`
  font-size: 1.25rem;
  margin-top: 2rem;
  color: ${palette.gray[4]};
`;
