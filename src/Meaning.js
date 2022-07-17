import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";

function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="meaning-definition">{definition.definition}</div>
            <div className="meaning-example">{definition.example}</div>
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </div>
  );
}

export default Meaning;
