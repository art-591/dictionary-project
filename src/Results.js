import React from "react";
import Meaning from "./Meaning";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  console.log(props.results);

  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2 className="Word">{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetics, index) {
            return <Phonetics key={index} phonetics={phonetics} />;
          })}
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
