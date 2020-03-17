import React from 'react'

const TodoListTitle = (props) => {
  return (
      <h3 className="todoList-header__title">
        {props.title}
      </h3>
  )
};

export default TodoListTitle
