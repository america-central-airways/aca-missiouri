import { Routes, Route, Link } from "react-router-dom";
import FirstPage from "../features/FirstPage";
import Home from "../features/Home";
import SecondPage from "../features/SecondPage";

const App: React.FC = () => {
  return (
    <>
      <header>
        <nav>
          <Link className="is-block" to="/">
            Home
          </Link>
          <Link className="is-block" to="/firstPage">
            First Page
          </Link>
          <Link className="is-block" to="/secondPage">
            Second Page
          </Link>
        </nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="firstPage" element={<FirstPage />} />
          <Route path="secondPage" element={<SecondPage />} />
        </Routes>
      </main>
      <footer />
    </>
  );
};

export default App;
