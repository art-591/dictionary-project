import axios from "axios";
import React, { useState } from "react";
import "./DictionarySearch.css";
import Results from "./Results";
import Images from "./Images";

export default function DictionarySearch(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);

  function searchWord(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    // documentation: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(url).then(searchWord);

    let pexelsApiKey =
      "563492ad6f91700001000001c2282529715e46af9302947db9fae247";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
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
        <Images photos={photos} />
      </div>
    );
  } else {
    load();
    return <div>Loading...</div>;
  }
}
