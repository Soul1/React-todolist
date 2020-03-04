import React from 'react'
import PropTypes from 'prop-types';

class TodoListTask extends React.Component {

    onIsDoneChanged = (e) => {
        this.props.changeStatus(this.props.task, e.currentTarget.checked)
    }

    render = () => {
        return (
            <div className="todoList-task">
                <input onChange={this.onIsDoneChanged}
                       type="checkbox"
                       checked={this.props.task.isDone}/>

                <span className={this.props.task.isDone ? 'taskCompleted' : ''}>{this.props.task.title},
                       priority: {this.props.task.priority}</span>
            </div>
        )
    }
}

export default TodoListTask;


TodoListTask.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string,
}