import React, { useState } from "react";
import axios from "axios";
import WordData from "./WordData";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search(event) {
    event.preventDefault();

    // API docu https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    // console.log(apiUrl);
    axios.get(apiUrl).then(handleResponse);
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>What word do you want to look up?</h1>
        <form onSubmit={search}>
          <input
            type="search"
            autoFocus={true}
            onChange={handelKeywordChange}
          />
        </form>
        <div className="hint">
          Suggested words: apple, yoga, sunset, wine...
        </div>
      </section>
      <WordData results={results} />
    </div>
  );
}
