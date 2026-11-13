import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./style.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Departments from "./pages/Departments";
import Courses from "./pages/Courses";
import Registration from "./pages/Registration";

function App() {
  return (
    <BrowserRouter>
      <div className="page-wrapper">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/departments" element={<Departments />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
