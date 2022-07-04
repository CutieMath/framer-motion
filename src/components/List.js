import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";

const itemVariants = {
  hidden: { opacity: 0 },
  visible: (custom) => ({
    opacity: 1,
    transition: { delay: custom },
  }),
};

function List({ items, removeItem }) {
  return (
    <>
      <ul
        values={items}
        className="ul-portal"
        style={{ display: "flex", flexDirection: "column", flex: 2 }}
      >
        {items.map((item) => (
          <li
            value={item}
            className="list-row"
            key={item.id}
            variants={itemVariants}
            initial="hidden"
          >
            <div>{item.text}</div>
            <div className="icons">
              <RiCloseCircleLine
                onClick={() => removeItem(item.id)}
                className="delete-icon"
              />
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default List;
