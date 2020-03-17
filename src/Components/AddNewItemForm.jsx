import React, {useState} from 'react'

const AddNewItemForm = (props) => {

  let [nameChange, setNameChange] = useState('')
  let [error, setError] = useState(false)


  let handleChange = (e) => {
    setNameChange(nameChange = e.target.value);
  };

  let onAddItemClick = () => {

    if (nameChange === '') {
      setError(error = true)
    }
    if (nameChange !== '') {
      setError(error = false)
    }
    if (!error) {
      props.addItem(nameChange);
      setNameChange(nameChange = '')
    }
  };

  return (
    <div className="todoList-newTaskForm">
      <input type="text"
             placeholder="New task name"
             onChange={handleChange}
             value={nameChange}
             className={error ? 'errorInput' : ''}
      />
      <button onClick={onAddItemClick}>Add</button>
    </div>
  )
};

export default AddNewItemForm
