import styled from "styled-components";

const StyledMain = styled.main`
  padding: 20px 30px 30px;
  width: 70%;
  background-color: #f4faf7;
  font-size: calc(16px + 0.1vw);
  min-height: 85vh;

  h3 {
    font-size: calc(17.6px + 0.3vw);
    margin-bottom: 10px;
  }

  p {
    line-height: 1.6;
    padding-top: 20px;
  }

  @media (max-width: 750px) {
    width: 100%;

    h3 {
      width: 100%;
      text-align: center;
      display: flex;
      justify-content: center;
    }
  }
`;

const ExpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  border-left: 2px solid #5f5f5f;
  gap: 10px;
`;

const Exp = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #5f5f5f;
  padding-bottom: 10px;

  p {
    color: #5f5f5f;
    padding: 0;
  }
`;

export default function Experience() {
  return (
    <StyledMain>
      <title>Experience | Resume</title>
      <h3>Experience</h3>
      <ExpWrapper>
        <Exp>
          <h1>Software Engineer</h1>
          <p>Aspen AI</p>
          <p>May 2026</p>
        </Exp>
        <Exp>
          <h1>Admissions Agent</h1>
          <p>Fordham University</p>
          <p>May 2023 - May 2025</p>
        </Exp>
        <Exp>
          <h1>Tech Intern</h1>
          <p>Grassroots Grocery</p>
          <p>June 2023 - August 2023</p>
        </Exp>
        <Exp>
          <h1>Software Engineer Intern</h1>
          <p>Shady Grove PLC</p>
          <p>June 2022 - August 2022</p>
        </Exp>
        <Exp>
          <h1>Intern</h1>
          <p>Websprix Tech Solutions</p>
          <p>March 2019 - April 2019</p>
        </Exp>
      </ExpWrapper>
    </StyledMain>
  );
}
