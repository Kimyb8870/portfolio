import styled from "styled-components/macro";
import Responsive from "../../common/Responsive";
import palette from "../../../lib/styles/palette";

export const StyledWork = styled.div`
  background: ${palette.gray[1]};
  padding-top: 6rem;
  padding-bottom: 6rem;
`;

export const Wrapper = styled(Responsive)``;

export const StyledProject = styled.div`
  padding: 2rem;
  border-radius: 30px;
  margin-top: 3rem;
  background: white;
`;

export const ProjectTitle = styled.h4`
  text-align: center;
  font-weight: 700;
  font-size: 2rem;
`;

export const ProjectContent = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ImgListWrapper = styled.ul`
  flex-basis: 50%;
  padding: 2rem;

  img {
    width: 100%;
  }

  @media (max-width: 768px) {
    flex-basis: initial;
  }
`;

export const DescriptionWrapper = styled.div`
  flex-basis: 50%;
  padding: 2rem;

  @media (max-width: 768px) {
    flex-basis: initial;
  }
`;

export const MainDescription = styled.div``;

export const SubDescriptionWrapper = styled.div`
  margin-top: 1rem;
`;

export const SubDescriptionItem = styled.div`
  :not(:last-child) {
    margin-bottom: 0.75rem;
  }

  b {
    margin-right: 0.5rem;
    font-size: 1.125rem;
  }

  span {
  }
`;
