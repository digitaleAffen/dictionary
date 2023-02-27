import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="container">
          <header className="App-header">
            <h1 id="dictionary">Dictionary</h1>
          </header>
          <main>
            <Dictionary defaultKeyword="Serendipity" />
            <div className="button">
              <button>
                <Link to="#dictionary" smooth>
                  Back to the Top
                </Link>
              </button>
            </div>
          </main>

          <footer>
            Cooded by <strong>Gio Lamadrid</strong>{" "}
            <img src={logo} className="App-logo" alt="logo" width="40" />{" "}
            <a
              href="https://github.com/digitaleAffen/dictionary"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourse on GitHub
            </a>
          </footer>
        </div>
      </div>
    </BrowserRouter>
  );
}
