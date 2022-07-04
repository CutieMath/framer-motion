import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function ListForm(props) {
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
    });
    setInput("");
  };

  return (
    <form className="list-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add an item"
        value={input}
        name="text"
        className="list-input"
        onChange={handleChange}
        ref={inputRef}
      />
      <button className="list-button">Add</button>
    </form>
  );
}

export default ListForm;
