import {
  BrowserRouter as Router,
  Switch as Routes,
  Route,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import List from "./pages/List";
import LandingSalary from "./pages/Dataset";
import Home from "./pages/Home";
import { UserContextProvider } from "./context/UserContext";
import { DataContextProvider } from "./context/DataContext";

function App() {
  return (
    <UserContextProvider>
      <DataContextProvider>
        <Router>
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/dataset" component={LandingSalary} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/list" component={List} />
          </Routes>
        </Router>
      </DataContextProvider>
    </UserContextProvider>
  );
}

export default App;
