import {  Routes, Route, useLocation, HashRouter } from "react-router-dom";
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
    // Remove previous classes
    document.body.className = "";

    // Get path name (default to 'home' if '/')
    const path = location.pathname.replace("/", "") || "home";

    // Add class to body
    document.body.classList.add(path);
  }, [location]);

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