import React, { useState } from "react";
import axios from "axios";
import WordData from "./WordData";
import "./Dictionary.css";
import Photos from "./Photos";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleDictionaryResponse(response) {
    // console.log(response.data[0].meanings[0].definitions[0].definition);
    setResults(response.data[0]);
  }

  function search() {
    // API docu https://dictionaryapi.dev/
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
  }

  function handlePexelsResponds(response) {
    setPhotos(response.data.photos);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();

    let pexelsApiKey =
      "LyysUDd3sqqKS6wyw0j80s9Z80PoFXzXUZXIRgaBVUWgNMIJ00ufxpGj";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };

    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponds);
  }

  function handelKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function loadWord() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h1>What word do you want to look up?</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              autoFocus={true}
              onChange={handelKeywordChange}
              placeholder="Example: serendipity"
              className="searchBar"
            />
          </form>
          {/* <div className="hint">
            Suggested words: apple, yoga, sunset, wine...
          </div> */}
        </section>
        <WordData results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    loadWord();
    return "Loading...";
  }
}
