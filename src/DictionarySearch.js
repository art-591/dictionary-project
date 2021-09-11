import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");

  function searchWord(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);

    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(searchWord);
  }

  function keywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" autoFocus={true} onChange={keywordChange} />
        <input type="submit" />
      </form>
    </div>
  );
}
