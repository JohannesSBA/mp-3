import styled from "styled-components";

const StyledHeader = styled.header`
  padding: 10px 20px;
  background-color: #2f5d50;
  color: #f4faf7;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 4px;

  h1 {
    font-size: calc(22.4px + 0.6vw);
  }

  p {
    font-size: calc(14.4px + 0.2vw);
  }

  @media (max-width: 750px) {
    align-items: center;
    text-align: center;
  }
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Johannes Bekele</h1>
      <p>My Online Resume</p>
    </StyledHeader>
  );
}
