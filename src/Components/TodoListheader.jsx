import React, {useState} from 'react'
import PropTypes from 'prop-types';

const TodoListHeader = (props) => {

  let [nameChange, setNameChange] = useState('')
  let [error, setError] = useState(false)


  let handleChange = (e) => {
    setNameChange(nameChange = e.target.value)
  };

  let onAddTaskClick = () => {

    if (nameChange === '') {
      setError(error = true)
    }
    if (nameChange !== '') {
      setError(error = false)
    }
    if (!error) {
      props.addTask(nameChange);
      setNameChange(nameChange = '',)
    }
  };

  return (

    <div className="todoList-header">
      <h3 className="todoList-header__title">What to Learn</h3>
      <div className="todoList-newTaskForm">
        <input type="text"
               placeholder="New task name"
               onChange={handleChange}
               value={nameChange}
               className={error ? 'errorInput' : ''}
        />
        <button onClick={onAddTaskClick}>Add</button>
      </div>
    </div>
  )
}

export default TodoListHeader

TodoListHeader.propTypes = {
  refTitleTask: PropTypes.object,
};