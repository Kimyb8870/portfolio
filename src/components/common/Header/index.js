import React from "react";
import { StyledHeader, Wrapper } from "./styles/Header";

const Header = () => {
  return (
    <StyledHeader>
      <Wrapper>
        <span className="logo">KIMYB</span>
        <div>
          <a href="#about">about</a>
          <a href="#skill">skill</a>
          <a href="#work">work</a>
          <a href="#contact">contact</a>
        </div>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
