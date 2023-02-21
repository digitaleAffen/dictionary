import React from "react";
import "./Phonetic.css";
import "./img/audio.png";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    let playAudio = new Audio(props.phonetics.audio);
    playAudio.play();
  }
  return (
    <div className="Word">
      <div className="word-result">
        <h3 className="word">{props.word}</h3>

        <img
          src="./img/audio.png"
          alt="audio icon"
          className="word--audio-icon"
          onClick={playAudio}
        />
      </div>
      <h4 className="text-phonetic">/ {props.phonetics.text} /</h4>
    </div>
  );
}
