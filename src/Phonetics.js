import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a
        className="Listen"
        rel="noreferrer"
        href={props.phonetics.audio}
        target="_blank"
      >
        <i className="far fa-play-circle"></i>
      </a>
      <span className="Phonetics-Text">{props.phonetics.text}</span>
    </div>
  );
}
