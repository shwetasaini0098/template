import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import HomeDetails from "./components/HomeDetails";
import AboutMe from "./components/AboutMe";
//import Resume from "./components/Resume";
import ProtectedResume from "./components/ProtectResume";
import Talents from "./components/Talents";
import WebDesigner from "./components/WebDesigner";
import CanvaDesigner from "./components/CanvaDesigner";
import MehandiDesigner from "./components/MehandiDesigner";
import FashionDesigner from "./components/FashionDesigner";
//import TalentDetails from "./components/TalentDetail";
//import Family from "./components/Family";
//import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter basename="/template">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <HomeDetails />
            </>
          }
        />
        <Route path="/about" element={<AboutMe />} />
        <Route path="/resume" element={<ProtectedResume />} />
        <Route path="/talents" element={<Talents />} />
        <Route path="/talents/web-designer" element={<WebDesigner />} />
        <Route path="/talents/canva-designer" element={<CanvaDesigner />} />
        <Route path="/talents/mehndi-designer" element={<MehandiDesigner />} />
        <Route path="/talents/fashion-designer" element={<FashionDesigner />} />
        {/*<Route path="/family" element={<Family />} />
        <Route path="/contact" element={<Contact />} />*/}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
