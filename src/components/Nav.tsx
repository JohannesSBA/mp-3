import { Link } from "react-router";
import styled from "styled-components";

const StyleLink = styled(Link)`
  color: #000;
  text-decoration: none;
  font:
    small-caps bold calc(2px + 2vw) "Times New Roman",
    Helvetica,
    sans-serif;
  transition: color 0.3s ease;
  &:hover {
    color: #646cff;
  }
`;

export default function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <StyleLink to="/home">Home</StyleLink>
        </li>
        <li>
          <StyleLink to="/education">Education</StyleLink>
        </li>
        <li>
          <StyleLink to="/experience">Experience</StyleLink>
        </li>
        <li>
          <StyleLink to="/projects">Projects</StyleLink>
        </li>
        <li>
          <StyleLink to="/contact">Contact</StyleLink>
        </li>
        <li>
          <StyleLink to="/refrences">Refrences</StyleLink>
        </li>
      </ul>
    </nav>
  );
}
