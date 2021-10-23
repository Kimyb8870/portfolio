import React from "react";
import {
  BadgeList,
  BadgeItem,
  StyledSkill,
  Wrapper,
  ImgIcon,
  BadgeTitle,
  StyledBadgeWrapper,
} from "./styles/Skill";
import SectionTitle from "../common/SectionTitle";
import htmlIcon from "../../assets/icons/html5.png";
import cssIcon from "../../assets/icons/css3.png";
import jsIcon from "../../assets/icons/js.png";
import reactIcon from "../../assets/icons/react.png";
import reduxIcon from "../../assets/icons/redux.png";
import sassIcon from "../../assets/icons/sass.png";
import gitIcon from "../../assets/icons/git.png";
import gitHubIcon from "../../assets/icons/github.png";

const FrontendBadges = () => {
  return (
    <StyledBadgeWrapper>
      <BadgeTitle>Frontend</BadgeTitle>
      <BadgeList>
        <BadgeItem>
          <ImgIcon src={htmlIcon} alt="html icon" />
        </BadgeItem>
        <BadgeItem>
          <ImgIcon src={cssIcon} alt="css icon" />
        </BadgeItem>
        <BadgeItem>
          <ImgIcon src={jsIcon} alt="js icon" />
        </BadgeItem>
        <BadgeItem>
          <ImgIcon src={reactIcon} alt="react icon" />
        </BadgeItem>
        <BadgeItem>
          <ImgIcon src={reduxIcon} alt="redux icon" />
        </BadgeItem>
        <BadgeItem>
          <ImgIcon src={sassIcon} alt="sass icon" />
        </BadgeItem>
      </BadgeList>
    </StyledBadgeWrapper>
  );
};

const GitBadges = () => {
  return (
    <StyledBadgeWrapper>
      <BadgeTitle>Version Control</BadgeTitle>
      <BadgeList>
        <BadgeItem noCenter>
          <ImgIcon src={gitIcon} alt="git icon" noRadius />
        </BadgeItem>
        <BadgeItem noCenter>
          <ImgIcon src={gitHubIcon} alt="github icon" noRadius larger />
        </BadgeItem>
      </BadgeList>
    </StyledBadgeWrapper>
  );
};

const Skill = () => {
  return (
    <StyledSkill>
      <Wrapper>
        <SectionTitle>SKILL</SectionTitle>
        <FrontendBadges />
        <GitBadges />
      </Wrapper>
    </StyledSkill>
  );
};

export default Skill;
