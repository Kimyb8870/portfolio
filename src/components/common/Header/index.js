import React, { useEffect, useState } from "react";
import {
  StyledHeader,
  Wrapper,
  LinkItem,
  StyledCloseIcon,
  StyledMenuIcon,
  LinkList,
} from "./styles/Header";

const Header = () => {
  const [headerOpen, setHeaderOpen] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setHeaderBackground(true);
    });
  }, []);

  return (
    <StyledHeader isWhite={headerBackground}>
      <Wrapper>
        <h1 className="logo">KIMYB</h1>
        {headerOpen ? (
          <StyledCloseIcon onClick={() => setHeaderOpen(false)} />
        ) : (
          <StyledMenuIcon onClick={() => setHeaderOpen(true)} />
        )}
        <LinkList className="linkList" headerOpen={headerOpen}>
          <LinkItem href="#about">about</LinkItem>
          <LinkItem href="#skill">skill</LinkItem>
          <LinkItem href="#work">work</LinkItem>
          <LinkItem href="#contact">contact</LinkItem>
        </LinkList>
      </Wrapper>
    </StyledHeader>
  );
};

export default Header;
