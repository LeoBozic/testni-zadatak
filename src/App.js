import { Link, Route, Routes } from "react-router-dom";
import { Home, Edit, Create } from "./pages/index";
import "./App.css";

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <Link to="/" className="header-link">
          Home
        </Link>
        <Link to="/create" className="header-link">
          Create
        </Link>
      </nav>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/create" Component={Create} />
        <Route path="/edit" Component={Edit} />
      </Routes>
    </div>
  );
}

export default App;
