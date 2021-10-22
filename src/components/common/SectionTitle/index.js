import React from "react";
import { StyledSectionTitle, SectionTitleWrapper } from "./styles/SectionTitle";
import CheckIcon from "@mui/icons-material/Check";

const SectionTitle = ({ children, ...restProps }) => {
  return (
    <SectionTitleWrapper>
      <CheckIcon />
      <StyledSectionTitle {...restProps}>{children}</StyledSectionTitle>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
