import React, { useState } from "react";
import {
  StyledProfile,
  StyledAbout,
  Wrapper,
  StyledInfoWrapper,
  StyledInfoItem,
  SectionTitleWithMarginTop,
} from "./styles/About";
import profileImg1 from "../../assets/img/profileImg1.jpg";
import profileImg2 from "../../assets/img/profileImg2.jpg";
import profileImg3 from "../../assets/img/profileImg3.jpg";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";
import PersonIcon from "@mui/icons-material/Person";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import SchoolIcon from "@mui/icons-material/School";
import EmailIcon from "@mui/icons-material/Email";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

const ImgCarousel = () => {
  const [carouselArray] = useState([
    {
      id: 1,
      img: profileImg1,
    },
    {
      id: 2,
      img: profileImg2,
    },
    {
      id: 3,
      img: profileImg3,
    },
  ]);

  return (
    <Carousel>
      {carouselArray.map((item) => (
        <Paper elevation={0}>
          <img src={item.img} alt="profile imgs" />
        </Paper>
      ))}
    </Carousel>
  );
};

const CarouselProfile = () => {
  return (
    <StyledProfile>
      <ImgCarousel />
    </StyledProfile>
  );
};

const InfoProfile = () => {
  const [personalInfo] = useState([
    {
      key: "이름",
      value: "김영봉",
      icon: <PersonIcon />,
    },
    {
      key: "생년월일",
      value: "98.06.10",
      icon: <CalendarTodayIcon />,
    },

    {
      key: "이메일",
      value: "qhd0084@gmail.com",
      icon: <EmailIcon />,
    },
    {
      key: "학력",
      value: "전북대학교(컴퓨터공학부 재학중)",
      icon: <SchoolIcon />,
    },
    {
      key: "연락처",
      value: "010-8870-5736",
      icon: <PhoneAndroidIcon />,
    },
  ]);

  return (
    <StyledInfoWrapper>
      {personalInfo.map((info) => (
        <StyledInfoItem>
          <div>{info.icon}</div>
          <div>
            <span className="infoItem--key">{info.key}</span>
            <span className="infoItem--value">{info.value}</span>
          </div>
        </StyledInfoItem>
      ))}
    </StyledInfoWrapper>
  );
};

const About = () => {
  return (
    <StyledAbout>
      <Wrapper>
        <SectionTitleWithMarginTop>ABOUT</SectionTitleWithMarginTop>
        <CarouselProfile />
        <InfoProfile />
      </Wrapper>
    </StyledAbout>
  );
};

export default About;
