import { Link } from "react-router";
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #2f5d50;
  color: #f4faf7;
  text-align: center;
  padding: 10px 15px;
  font-size: calc(12.8px + 0.1vw);
  position: fixed;
  width: 100%;
  bottom: 0;

  a {
    color: #a8d5ba;
    text-decoration: none;
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>
        All rights reserved by Johannes Bekele
        <Link to={``}>Credits </Link> &copy;
      </p>
    </StyledFooter>
  );
}
