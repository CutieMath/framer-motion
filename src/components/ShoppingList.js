import React, { useState, useEffect } from "react";
import List from "./List";
import ListForm from "./ListForm";
import { motion } from "framer-motion";

function ShoppingList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem("items"));
    if (storedItems) setItems(storedItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);

  const addListItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }
    const newListListItem = [item, ...items];
    setItems(newListListItem);
  };

  const removeItem = (id) => {
    setItems((previousItems) =>
      [...previousItems].filter((item) => item.id !== id)
    );
  };

  return (
    <div>
      <motion.h1
        initial={{ y: -200, opacity: 0 }}
        animate={{ scale: 1.5, y: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "linear", type: "spring" }}
      >
        Testing List
      </motion.h1>
      <ListForm onSubmit={addListItem} />
      <List items={items} removeItem={removeItem} reOrderList={setItems} />
    </div>
  );
}

export default ShoppingList;
