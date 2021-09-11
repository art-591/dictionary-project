import React from "react";

export default function Synonyms(props) {
  if (props.synonyms.length > 0) {
    console.log(props.synonyms);
    return (
      <div className="Synonyms">
        <strong>Synonyms:</strong>
        <ul className="Synonym-List">
          {props.synonyms.map(function (synonym, index) {
            return (
              <li className="Synonym" key={index}>
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
