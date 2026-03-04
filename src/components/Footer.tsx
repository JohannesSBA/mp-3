import { Link } from "react-router";

export default function Footer() {
  return (
    <footer>
      <p>
        All rights reserved by Johannes Bekele
        <Link to={``}>Credits </Link> &copy;
      </p>
    </footer>
  );
}
