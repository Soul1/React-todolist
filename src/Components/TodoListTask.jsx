import React from 'react'
import PropTypes from 'prop-types';

class TodoListTask extends React.Component {
    render = () => {
        return (
            <div className="todoList-task">
                <input type="checkbox" checked={this.props.isDone}/>
                <span>{this.props.title},  priority: {this.props.priority}</span>
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