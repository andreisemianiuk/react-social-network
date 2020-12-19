import React, { useState } from 'react'
import PropTypes from 'prop-types'

const useInputValue = (defaultValue = '') => {
  const [value, setValue] = useState(defaultValue)

  return {
    bind: {
      value,
      onChange: event => setValue(event.target.value),
    },
    clear: () => setValue(''),
    value: () => value,
  }
}

const AddTodo = ({ onCreate }) => {
  const input = useInputValue('')
  const submitHandler = event => {
    event.preventDefault()

    if (input.value().trim()) {
      onCreate(input.value())
      input.clear()
    }
  }

  return (
    <form style={styles.form} onSubmit={submitHandler}>
      <input style={styles.input} placeholder='What need to do?' {...input.bind} />
      <button style={styles.button} type='submit'>Add</button>
    </form>
  )
}

AddTodo.propTypes = {
  onCreate: PropTypes.func.isRequired,
}

const styles = {
	form: {
		margin: '2rem',
	},
	input: {
		width: '40%',
		height: '20px',
	},
	button: {
		width: '50px',
		height: '25px',
		backgroundColor: '#4682B4',
		marginLeft: '10px',
		borderRadius: '3px'
	}
}

export default AddTodo
