import React from "react";
import "./App.css";
import DictionarySearch from "./DictionarySearch";

export default function App() {
  return (
    <div className="app">
      <header className="app-header">Dictionary</header>
      <DictionarySearch defaultKeyword="sunset" />
      <footer className="coder">
        Coded by Anel Sanders,{" "}
        <a href="https://github.com/art-591/dictionary-project">Github</a>.
      </footer>
    </div>
  );
}
