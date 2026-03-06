import { Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home";
import Nav from "./components/nav";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import Destination from "./pages/destination";

// Wrapper component to handle body class
function BodyWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    // Remove all previous classes
    document.body.className = "";

    // Add the page-specific class
    if (location.pathname === "/") {
      document.body.classList.add("home");
    } else if (location.pathname === "/destination") {
      document.body.classList.add("destination");
    } else if (location.pathname === "/crew") {
      document.body.classList.add("crew");
    } else if (location.pathname === "/technology") {
      document.body.classList.add("technology");
    }
  }, [location.pathname]);

  return children;
}

function App() {
  return (
    <HashRouter>
      <BodyWrapper>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
              </>
            }
          />
          <Route
            path="/destination"
            element={
              <>
                <Nav />
                <Destination />
              </>
            }
          />
          <Route
            path="/crew"
            element={
              <>
                <Nav />
                <Crew />
              </>
            }
          />
          <Route
            path="/technology"
            element={
              <>
                <Nav />
                <Technology />
              </>
            }
          />
        </Routes>
      </BodyWrapper>
    </HashRouter>
  );
}

export default App;
