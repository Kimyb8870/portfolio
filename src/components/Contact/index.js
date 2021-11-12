import React from "react";
import {
  Description,
  EmailLink,
  StyledContact,
  Wrapper,
  GithubLink,
  ResumeLink,
} from "./styles/Contact";
import SectionTitle from "../common/SectionTitle";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <StyledContact>
      <Wrapper>
        <SectionTitle>CONTACT</SectionTitle>
        <Description>
          아래의 메일로 연락주시면 빠르게 답장드리도록 하겠습니다
        </Description>
        <EmailLink href="mailto:qhd0084@gmail.com">qhd0084@gmail.com</EmailLink>
        {/* <GithubLink href="https://github.com/Kimyb8870" target="_blank">
          <GitHubIcon />
        </GithubLink> */}
        <ResumeLink
          href="https://atlantic-polo-602.notion.site/68a3d11072c24367a18571ce31c5b83f"
          target="_blank"
        >
          이력서는 이쪽으로
        </ResumeLink>
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;
