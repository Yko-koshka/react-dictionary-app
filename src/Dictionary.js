import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

function Dictionary() {
  const [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`${keyword}`);

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
