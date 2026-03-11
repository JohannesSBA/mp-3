import styled from "styled-components";
import johannesImg from "../assets/johannes.jpeg";

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

  img {
    max-width: 200px;
    max-height: fit-content;
    border-radius: 8px;
    margin: 10px 0 20px;
    display: block;
    padding: 5px;
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

const BodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: center;
  }
`;

export default function Home() {
  return (
    <StyledMain>
      <title>Home | Resume</title>
      <h3>Main</h3>
      <BodyWrapper>
        <img src={johannesImg} alt="Johannes Bekele" />
        <p>
          My name is Johannes Bekele. I am a computer science student at Boston
          University studying Computer Science. I am in my last semester of my
          Graduate program and graduate in May. Welcome to my website. You can
          find more about my education, experience, projects, and contact
          information on the other pages. I am passionate about software
          development and constantly strive to improve my skills by learning new
          technologies and frameworks.
        </p>
      </BodyWrapper>
      <p>
        I apply my analytical and problem-solving skills to find robust
        solutions. By understanding the needs and requirements of users, I
        develop software solutions that meet their needs and build deeper
        connections with them. My experience in various internships and projects
        has helped me develop adaptability, communication skills, and critical
        thinking skills. It has shown me how passionate I am about a career in
        computer science. I particularly enjoy working in teams to brainstorm
        ideas and find the most effective approach to building software
        solutions. Specifically, my strongest ability lies in developing
        software using different frameworks and my excitement about computer
        science's continuous advancements and new possibilities. I look forward
        to contributing my skills to the industry. When I am not occupied
        working on my portfolio, school, and job search, I advance my physical
        health through exercise, spending time with friends and family,
        discovering new restaurants in New York, and playing competitive video
        games.
      </p>
    </StyledMain>
  );
}
