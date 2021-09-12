import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="phonetics">
      <a
        className="listen"
        rel="noreferrer"
        href={props.phonetics.audio}
        target="_blank"
      >
        <i className="far fa-play-circle"></i>
      </a>
      <span className="phonetics-text">{props.phonetics.text}</span>
    </div>
  );
}
