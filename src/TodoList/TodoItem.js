import React from "react";

const styles = {
  li: {
    display: "flex",
    justifyContent: "space-between",
    width: "400px",
    border: "2px solid #333",
    padding: ".5rem",
    marginBottom: ".5rem",
  },
};

const TodoItem = ({ todo, index }) => {
  return (
    <li style={styles.li}>
      <span>
        <input type='checkbox' />
        <strong>{` ${index + 1} `}</strong>
        {todo.title}
      </span>
      <button>&times;</button>
    </li>
  );
};

export default TodoItem;
