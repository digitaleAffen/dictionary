import React from "react";
import Meaning from "./Meaning";
import Phonetic from "./Phonetic";
import "./WordData.css";

export default function WordData(props) {
  if (props.results) {
    return (
      <div className="WordData">
        <section>
          <h2>{props.results.word}</h2>
          <Phonetic phonetics={props.results.phonetics[0]} />
          <Phonetic phonetics={props.results.phonetics[1]} />
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <section key={index}>
              <Meaning meaning={meaning} />
            </section>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
