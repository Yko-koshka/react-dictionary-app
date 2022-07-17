import React from "react";

function Phonetics(props) {
  console.log(props.phonetic);
  return (
    <div className="Phonetics">
      <a href={props.phonetic.audio}>Listen</a>
      <br />
      {props.phonetic.text}
    </div>
  );
}

export default Phonetics;
