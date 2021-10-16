import styled from "styled-components/macro";

export const StyledResponsive = styled.div`
  width: 1024px;
  margin: 0 auto;
  padding: 0 1rem;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
