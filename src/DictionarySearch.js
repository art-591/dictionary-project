import React, { useState } from "react";
import "./DictionarySearch.css";

export default function DictionarySearch() {
  const [keyword, setKeyword] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
