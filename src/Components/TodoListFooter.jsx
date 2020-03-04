import React, {useState} from 'react'
import PropTypes from 'prop-types';


const TodoListFooter = (props) => {

  let [toShow, setToShow] = useState(false);

  const onClickForShow = () => {
    debugger
    setToShow(true)
  };
  const onClickForSide = () => {
    debugger
    setToShow(false)
  };

  let classForAll = props.filterValue === 'All' ? 'filterActive' : '';
  let classForCompleted = props.filterValue === 'Completed' ? 'filterActive' : '';
  let classForActive = props.filterValue === 'Active' ? 'filterActive' : '';
  debugger
  return (
    <div>
      <div className={toShow ? 'toShow' : 'toSide'}>
        <div className="todoList-footer">
          <button
            onClick={() => {
              props.changeFilter('All')
            }}
            className={classForAll}>All
          </button>
          <button
            onClick={() => {
              props.changeFilter('Completed')
            }}
            className={classForCompleted}>Completed
          </button>
          <button
            onClick={() => {
              props.changeFilter('Active')
            }}
            className={classForActive}>Active
          </button>
        </div>
      </div>
      <div>
        <button onClick={onClickForSide} className={toShow ? 'toShow' : 'toSide'}>Side</button>
      </div>
      <div>
        <button onClick={onClickForShow} className={toShow ? 'toSide' : 'toShow'}>Show</button>
      </div>
    </div>
  )
}

export default TodoListFooter;

TodoListFooter.propTypes = {
  filterValue: PropTypes.string,
};
