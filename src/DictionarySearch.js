import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";

export default function DictionarySearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function searchWord(response) {
    console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search() {
    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(searchWord);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section className="DictionarySearch">
          <h3 className="intro">What word would you like to search?</h3>
          <form onSubmit={handleSubmit} className="DictionaryForm">
            <input
              type="search"
              autoFocus={true}
              onChange={keywordChange}
              defaultValue={props.defaultKeyword}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
