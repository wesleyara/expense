import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";

import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import { DataContextProvider } from "./context/DataContext";
import { GlobalStyle } from "./style/global";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <UserContextProvider>
      <DataContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/list" element={<List />} />
          </Routes>
        </Router>
        <GlobalStyle />
      </DataContextProvider>
    </UserContextProvider>
  );
}

export default App;
