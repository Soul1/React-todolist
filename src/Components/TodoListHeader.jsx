import React from 'react'
import PropTypes from 'prop-types';

class TodoListHeader extends React.Component {

    onAddTaskClick = () => {
        let newText = this.props.refTitleTask.current.value;
        this.props.refTitleTask.current.value = '';
        this.props.addTask(newText)
    }

    render = () => {

        return (

            <div className="todoList-header">
                <h3 className="todoList-header__title">What to Learn</h3>
                <div className="todoList-newTaskForm">
                    <input type="text"
                           placeholder="New task name"
                           ref={this.props.refTitleTask}
                    />
                    <button onClick = {this.onAddTaskClick}>Add</button>
                </div>
            </div>
        )
    }
}
export default TodoListHeader

TodoListHeader.propTypes = {
    refTitleTask: PropTypes.object,
};