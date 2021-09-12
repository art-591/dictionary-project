import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    return (
      <div className="synonyms">
        <h4 className="synonyms-title">synonyms</h4>
        <ul className="Synonym-List">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="synonym" key={index}>
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
