import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary defaultKeyword="Serendipity" />
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
  );
}
