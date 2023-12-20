import NavBar from "./components/NavBar";
import Resume from "./pages/Resume";
import Family from "./pages/Family";
import About from "./pages/About";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/family" element={<Family />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
