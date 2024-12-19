
import { Route, Routes } from "react-router-dom";
import Profile from "./Pages/Profile";
import About from "./Pages/about";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
export const App=()=> {
  return (
    <Routes>
      <Route path="/" element={<Profile />}></Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}
