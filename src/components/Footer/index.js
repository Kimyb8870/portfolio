import React from "react";
import { CopyRight, LinkItem, StyledFooter } from "./styles/Footer";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <StyledFooter>
      <LinkItem href="https://github.com/Kimyb8870" target="_blank">
        <GitHubIcon />
        <span>0Bong's Github</span>
      </LinkItem>
      <CopyRight>© 2021. Kim Young Bong. All rights reserved.</CopyRight>
    </StyledFooter>
  );
};

export default Footer;
