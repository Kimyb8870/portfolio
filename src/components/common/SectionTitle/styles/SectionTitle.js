import styled from "styled-components/macro";
import palette from "../../../../lib/styles/palette";

export const SectionTitleWrapper = styled.div`
  display: flex;
  margin: 0 auto;
  justify-content: center;

  .MuiSvgIcon-root {
    width: 2rem;
    height: 2rem;
    margin-right: 0.5rem;
    color: ${palette.gray[6]};
  }
`;

export const StyledSectionTitle = styled.h2`
  font-size: 2.5rem;
  font-family: "Jalnan";
  letter-spacing: 2px;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid ${palette.gray[6]};
`;
