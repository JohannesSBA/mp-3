import { createBrowserRouter, Route, RouterProvider } from "react-router";
import { Routes } from "react-router";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./mains/Home";
import Educations from "./mains/Educations";
import Experience from "./mains/Experience";
import Project from "./mains/Project";
import Contact from "./mains/Contact";
import Ref from "./mains/Ref";
import Nav from "./components/Nav";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 90vw;
  margin: 0 auto;
  background-color: #eef5f0;
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
`;

const StyledContainer = styled.div`
  display: flex;
  max-height: 100%;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

function Root() {
  return (
    <StyledWrapper>
      <Header />
      <StyledContainer>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/documents/home.html" element={<Home />} />
          <Route path="/documents/education.html" element={<Educations />} />
          <Route path="/documents/experience.html" element={<Experience />} />
          <Route path="/documents/projects.html" element={<Project />} />
          <Route path="/documents/contact.html" element={<Contact />} />
          <Route path="/documents/refrences.html" element={<Ref />} />
        </Routes>
      </StyledContainer>
      <Footer />
    </StyledWrapper>
  );
}

const router = createBrowserRouter([
  {
    path: "*",
    Component: Root,
  },
]);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
