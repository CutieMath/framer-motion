import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

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
        <AnimatePresence>
          {items.map((item, index) => (
            <motion.li
              layoutId={item.id} // make adding list item more smooth
              exit="hidden" // special property for animatePresence
              value={item}
              className="list-row"
              key={item.id}
              variants={itemVariants}
              custom={(index + 1) * 0.2}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 1.1 }}
              initial="hidden"
              animate="visible"
            >
              <div>{item.text}</div>
              <div className="icons">
                <RiCloseCircleLine
                  onClick={() => removeItem(item.id)}
                  className="delete-icon"
                />
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </>
  );
}

export default List;
