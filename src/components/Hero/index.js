import React from "react";
import {
  MainText,
  StyledHero,
  StyledText,
  SubText,
  TextWrapper,
  Name,
  BreakLine,
} from "./styles/Hero";

const Hero = () => {
  return (
    <StyledHero>
      <StyledText>
        <TextWrapper>
          <MainText>
            프론트엔드 개발자
            <BreakLine /> <Name>김영봉</Name>입니다
          </MainText>
          <SubText>기타 치는것과 수영하기 좋아하는 개발자입니다</SubText>
        </TextWrapper>
      </StyledText>
    </StyledHero>
  );
};

export default Hero;
