import {
  Routes,
  Route,
} from "react-router";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AllProjects from "./pages/AllProjects";
import AllCertifications from "./pages/AllCertifications";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<AllProjects />}
        />

        <Route
          path="/certifications"
          element={<AllCertifications />}
        />
      </Routes>
    </>
  );
}

export default App;