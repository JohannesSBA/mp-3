import { Link } from "react-router";
import styled from "styled-components";

const StyledNav = styled.nav`
  width: 30%;
  max-width: 30%;
  background-color: #3f7d68;

  @media (max-width: 750px) {
    width: 100%;
    max-width: 100%;
  }
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  gap: 10px;
  height: 100%;

  @media (max-width: 750px) {
    flex-direction: row;
    gap: 0;
    width: 100%;
    padding: 2px 0;
  }
`;

const StyledListItem = styled.li`
  list-style: none;
  background-color: #a8d5ba;
  padding: 12px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(15.2px + 0.4vw);
  border-radius: 6px;

  @media (max-width: 750px) {
    justify-content: center;
    gap: 2px;
    font-size: calc(10px + 0.3vw);
    border: 0.5px solid black;
  }
`;

const StyleLink = styled(Link)`
  text-decoration: none;
  color: #123026;
`;

export default function Nav() {
  return (
    <StyledNav>
      <StyledList>
        <StyledListItem>
          <StyleLink to="/documents/home.html">Home</StyleLink>
        </StyledListItem>
        <StyledListItem>
          <StyleLink to="/documents/education.html">Education</StyleLink>
        </StyledListItem>
        <StyledListItem>
          <StyleLink to="/documents/experience.html">Experience</StyleLink>
        </StyledListItem>
        <StyledListItem>
          <StyleLink to="/documents/projects.html">Projects</StyleLink>
        </StyledListItem>
        <StyledListItem>
          <StyleLink to="/documents/contact.html">Contact</StyleLink>
        </StyledListItem>
        <StyledListItem>
          <StyleLink to="/documents/refrences.html">Refrences</StyleLink>
        </StyledListItem>
      </StyledList>
    </StyledNav>
  );
}
