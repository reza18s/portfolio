import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ProjectPage from "./components/Project";
import { Navigate, Route, Routes } from "react-router-dom";
import { GravityStarsBackground } from "./components/animate-ui/components/backgrounds/gravity-stars";
import "./App.css";

function App() {
  return (
    <>
      <GravityStarsBackground
        className="fixed inset-0 -z-10"
        style={{ color: "var(--white-2)" }}
      />

      <main>
        <Sidebar />

        <div className="main-content relative">
          <Navbar />

          <Routes>
            <Route path="/" element={<Navigate to="/about" replace />} />
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/portfolio/:projectTitle" element={<ProjectPage />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
