import React, { useState, useEffect, useCallback } from "react";
import "./style.css";

export default function Debouncing() {
  const [word, setWord] = useState("");

  async function getData(search) {
    try {
      const res = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      );
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log("Error Occured", err);
    }
  }

  function debounce(fn, delay) {
    let timer;

    return function (value) {
      clearTimeout(timer);

      timer = setTimeout(() => {
        fn(value);
      }, delay);
    };
  }

  const debounceRes = useCallback(debounce(getData, 5000), []);

  useEffect(() => {
    if (word) {
      debounceRes(word);
    }
  }, [word, debounceRes]);

  return (
    <div>
      <h1>Debouncing</h1>

      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
      />

      <br />
      <br />

      <p>Debounced word: {word}</p>
    </div>
  );
}
