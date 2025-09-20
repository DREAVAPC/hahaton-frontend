import { BrowserRouter as Router, Link } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <nav className="navigation">
          <Link to="/login" className="nav-link">
            Вход
          </Link>
          <Link to="/register" className="nav-link">
            Регистрация
          </Link>
        </nav>

        <main className="main-content">
          <AppRouter />
        </main>
      </div>
    </Router>
  );
}

export default App;
