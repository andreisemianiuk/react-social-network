import React from 'react';
import { uniqueKeyConstructor } from '../helpers/uniqueKeyCreator';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const styles = {
	ul: {
		listStyle: 'none',
		margin: 0,
		padding: 0
	}
}

const TodoList = (props) => {
	return (
		<ul style={styles.ul}>
			{props.todos.map((todo, index) => {
				return <TodoItem key={uniqueKeyConstructor()} todo={todo} index={index} />
				})}
			
		</ul>
	)
}

TodoList.propTypes = {
	todos: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default TodoList