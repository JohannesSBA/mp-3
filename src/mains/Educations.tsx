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

const EducationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Education = styled.div`
  display: flex;
  flex-direction: row;

  img {
    max-width: 150px;
    max-height: fit-content;
    border-radius: 8px;
    margin: 5px;
    display: block;
  }

  p {
    color: #5f5f5f;
  }
`;

const EducationInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Educations() {
  return (
    <StyledMain>
      <title>Education | Resume</title>
      <h3>Education</h3>
      <EducationWrapper>
        <Education>
          <img
            src="../src/assets/bostonUniversity.png"
            alt="boston university logo"
          />
          <EducationInfo>
            <h1>Boston University</h1>
            <p>
              Master's degree, Computer Science, Cyber Security concentration
            </p>
            <p>Jul 2025 - May 2026</p>
          </EducationInfo>
        </Education>
        <Education>
          <img
            src="../src/assets/fordhamUnivesity.png"
            alt="Fordham university logo"
          />
          <EducationInfo>
            <h1>Fordham University</h1>
            <p>Bachelor's degree, Computer Science</p>
            <p>Sep 2021 - May 2025</p>
            <p>
              Activities and societies: FABER AWARD RECEPIENT, CUM LADE,
              ACADEMIC INTEGRITY SUBCOMITEE
            </p>
          </EducationInfo>
        </Education>
      </EducationWrapper>
    </StyledMain>
  );
}
