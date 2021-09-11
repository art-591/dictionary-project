import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">Dictionary App</header>
      <DictionarySearch />
      <footer className="coder">
        Coded by Anel Sanders. Code available on{" "}
        <a href="https://github.com/art-591/dictionary-project">Github</a>.
      </footer>
    </div>
  );
}
