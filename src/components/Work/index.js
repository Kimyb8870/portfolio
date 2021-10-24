import React from "react";
import Carousel from "react-material-ui-carousel";
import SectionTitle from "../common/SectionTitle";
import {
  StyledWork,
  Wrapper,
  StyledProject,
  ProjectTitle,
  ProjectContent,
  ImgListWrapper,
  DescriptionWrapper,
  MainDescription,
  SubDescriptionWrapper,
  SubDescriptionItem,
} from "./styles/Work";
import dailyPostLogin from "../../assets/projectImgs/daily-post-login.png";
import dailyPostRegister from "../../assets/projectImgs/daily-post-register.png";
import dailyPostMain from "../../assets/projectImgs/daily-post-main.png";
import dailyPostEdit from "../../assets/projectImgs/daily-post-edit.png";
import dailyPostPost from "../../assets/projectImgs/daily-post-post.png";
import { Paper } from "@mui/material";

const projectImgs = [
  {
    id: 1,
    img: dailyPostLogin,
  },
  {
    id: 2,
    img: dailyPostRegister,
  },
  {
    id: 3,
    img: dailyPostMain,
  },
  {
    id: 4,
    img: dailyPostEdit,
  },
  {
    id: 5,
    img: dailyPostPost,
  },
];

const Project = () => {
  return (
    <StyledProject>
      <ProjectTitle>DAILY POST</ProjectTitle>
      <ProjectContent>
        <ImgListWrapper>
          <Carousel>
            {projectImgs.map(({ id, img }) => (
              <Paper>
                <img src={img} alt="" />
              </Paper>
            ))}
          </Carousel>
        </ImgListWrapper>
        <DescriptionWrapper>
          <MainDescription>
            하루 일과를 기록할 수 있는 웹사이트 입니다. react-router-dom을
            사용한 라우팅, 백엔드와 api를 통한 데이터 통신과 전달받을 데이터를
            리덕스(saga)를 통해 관리해보며 전반적인 프론트엔드에서 사용하는 기술
            스택들에 대해 익숙해질 수 있었습니다
          </MainDescription>
          <SubDescriptionWrapper>
            <SubDescriptionItem>
              <b>구현사항:</b>
              <span>회원가입 및 로그인, 포스트 등록 · 삭제 · 수정</span>
            </SubDescriptionItem>
            <SubDescriptionItem>
              <b>GitHub: </b>
              <span>
                <a
                  href="https://github.com/Kimyb8870/DAILY-POST"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/Kimyb8870/DAILY-POST
                </a>
              </span>
            </SubDescriptionItem>
            <SubDescriptionItem>
              <b>도메인:</b>
              <span>
                <a
                  href="http://www.daily-post.tk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  http://www.daily-post.tk/
                </a>
              </span>
            </SubDescriptionItem>
            <SubDescriptionItem>
              <b>Frontend:</b>
              <span>
                React, Styled-components, Redux(Saga), react-router-dom
              </span>
            </SubDescriptionItem>
            <SubDescriptionItem>
              <b>Backend:</b>
              <span>Node.js, MongoDB</span>
            </SubDescriptionItem>
          </SubDescriptionWrapper>
        </DescriptionWrapper>
      </ProjectContent>
    </StyledProject>
  );
};

const Work = () => {
  return (
    <StyledWork>
      <Wrapper>
        <SectionTitle>WORK</SectionTitle>
        <Project />
      </Wrapper>
    </StyledWork>
  );
};

export default Work;
