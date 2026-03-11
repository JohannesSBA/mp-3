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

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Halves = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2px;

  h1 {
    font-size: calc(25px + 0.3vw);
    padding: 4px;
    margin: 4px;
    border-right: 1px solid rgba(123, 123, 123, 0.4);
  }

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

const LeftHalf = styled.div`
  width: 50%;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  border: 1px solid rgb(170, 168, 168);
  border-radius: 14px;
  padding: 16px 18px;
  background-color: #f9fbff;

  h1 {
    font-size: calc(10px + 0.01vw);
    font-weight: 500;
    color: rgb(182, 178, 178);
  }
`;

export default function Contact() {
  return (
    <StyledMain>
      <ContactWrapper>
        <Halves>
          <title>Contact | Resume</title>
          <h1>Let's Work Together</h1>
          <p>
            Available for collaborations, product teams, and select freelance
            projects.
          </p>
        </Halves>
        <Halves>
          <LeftHalf>
            <Card>
              <p>Email</p>
              <h1>johannesseleshi@gmail.com</h1>
            </Card>
            <Card>
              <p>Phone</p>
              <h1>+1 (347) 425-4757</h1>
              <p>Based in</p>
              <h1>Boston MA</h1>
            </Card>
            <Card>
              <p>Questions</p>
              <h1>
                Have questions? Feel free to contact me and I'll get back to you.
              </h1>
            </Card>
          </LeftHalf>
          <div id="right-half"></div>
        </Halves>
      </ContactWrapper>
    </StyledMain>
  );
}
