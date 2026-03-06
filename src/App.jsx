import {  Routes, Route, useLocation, HashRouter } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/home";
import Nav from "./components/nav";
import Crew from "./pages/crew";
import Technology from "./pages/technology";
import Destination from "./pages/destination";

// Wrapper component to handle body class
function BodyWrapper() {

   const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.body.style.backgroundImage = 'url("/assets/home/background-home-desktop.jpg")';
        break;
      case "/destination":
        document.body.style.backgroundImage = 'url("/assets/destination/background-destination-desktop.jpg")';
        break;
      case "/crew":
        document.body.style.backgroundImage = 'url("/assets/crew/background-crew-desktop.jpg")';
        break;
      case "/technology":
        document.body.style.backgroundImage = 'url("/assets/technology/background-technology-desktop.jpg")';
        break;
      default:
        document.body.style.backgroundImage = '';
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