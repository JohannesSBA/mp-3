import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./mains/Home.tsx";
import Nav from "./components/Nav.tsx";
import Header from "./components/Header.tsx";
import Footer from "./components/Footer.tsx";
import Educations from "./mains/Educations.tsx";
import Experience from "./mains/Experience.tsx";
import Project from "./mains/Project.tsx";
import Contact from "./mains/Contact.tsx";
import Ref from "./mains/Ref.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Nav />
      <Header />
      <Footer />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/education" element={<Educations />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refrences" element={<Ref />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
