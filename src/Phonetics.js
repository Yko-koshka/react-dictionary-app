import React from "react";
import "./Phonetics.css";

function Phonetics(props) {
  return (
    <div className="Phonetics">
      <a className="phonetics-btn" href={props.phonetic.audio}>
        Listen
      </a>
      {props.phonetic.text}
    </div>
  );
}

export default Phonetics;
