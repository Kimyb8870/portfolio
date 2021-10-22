import styled from "styled-components/macro";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";
import SectionTitle from "../../common/SectionTitle";

export const StyledAbout = styled.div`
  background: white;
`;

export const Wrapper = styled(Responsive)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 4rem;
  padding-bottom: 4rem;
`;

export const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    display: block;
    width: 250px;
    border-radius: 50%;

    @media (max-width: 768px) {
      width: 200px;
    }
  }
`;

export const StyledInfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 3rem;
`;

export const StyledInfoItem = styled.div`
  width: 50%;
  padding: 1rem;
  display: flex;

  @media (max-width: 768px) {
    flex-basis: 100%;
    justify-content: flex-start;
  }

  .MuiSvgIcon-root {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 2rem;
  }

  div:last-child {
    display: flex;
    flex-direction: column;
  }

  .infoItem--key {
    font-weight: 700;
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
  }

  .infoItem--value {
    font-size: 1rem;
  }
`;

export const SectionTitleWithMarginTop = styled(SectionTitle)`
  margin-bottom: 3rem;
`;
