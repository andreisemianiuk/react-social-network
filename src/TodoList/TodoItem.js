import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

const styles = {
  li: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '70%',
		border: '2px solid #333',
		borderRadius: '5px',
    padding: '.5rem',
    margin: '.5rem .5rem',
    backgroundColor: '#B0C4DE',
  },
}

const TodoItem = ({ todo, index, onChange }) => {
  const { removeTodo } = useContext(Context)
  const classes = []

  if (todo.completed) {
    classes.push('checked')
  }
  return (
    <li style={styles.li}>
      <span>
        <input
          type='checkbox'
          checked={todo.completed}
          onChange={() => onChange(todo.id)}
        />
        <strong>{` ${index + 1} `}</strong>
        <span className={classes.join(' ')}>{todo.title}</span>
      </span>
      <button className='rm' onClick={removeTodo.bind(null, todo.id)}>
        &times;
      </button>
    </li>
  )
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  index: PropTypes.number,
  onChange: PropTypes.func.isRequired,
}

export default TodoItem
