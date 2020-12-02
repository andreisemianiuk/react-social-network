import React from "react";
import { uniqueKeyConstructor } from "../helpers/uniqueKeyCreator";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

const TodoList = (props) => {
	console.log(props.todos);
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return (
          <TodoItem
            key={uniqueKeyConstructor()}
            todo={todo}
            index={index}
            onChange={props.onChange}
          />
        );
      })}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default TodoList;
