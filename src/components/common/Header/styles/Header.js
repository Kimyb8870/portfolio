import styled from "styled-components";
import palette from "../../../../lib/styles/palette";
import Responsive from "../../Responsive";

export const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 4rem;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.25);
`;

export const Wrapper = styled(Responsive)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;

  .logo {
    color: ${palette.gray[9]};
    font-size: 1.25rem;
    font-weight: 700;
    letter-spacing: 1.5px;
  }

  div {
    display: flex;

    a {
      color: ${palette.gray[8]};
      padding: 0.75rem 1.25rem;
      box-sizing: border-box;
      border-radius: 10px;
      font-weight: 600;
      transition: all 200ms;
    }

    a:hover {
      background: rgba(0, 0, 0, 0.25);
      /* color: ${palette.indigo[2]}; */
      color: white;
      box-shadow: 0 0 2px rgba(0, 0, 0, 0.25);
    }

    a + a {
      margin-left: 0.5rem;
    }
  }
`;
