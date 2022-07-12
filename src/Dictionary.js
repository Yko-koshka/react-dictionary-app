import React, { useState } from "react";
import "./Dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }
  return (
    <form className="Dictionary" onSubmit={search}>
      <input type="search" onChange={handleKeywordChange} />
    </form>
  );
}

export default Dictionary;
