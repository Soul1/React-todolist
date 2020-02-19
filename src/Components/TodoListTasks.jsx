import React from 'react'
import TodoListTask from "./TodoListTask";
import PropTypes from 'prop-types';

class TodoListTasks extends React.Component {
    render = () => {

        let tasksElements =
            this.props.tasks.map(task => <TodoListTask title={task.title}
                              isDone={task.isDone}
                              priority={task.priority}/>)

        return (
            <div className="todoList-tasks">
                {tasksElements}
            </div>
        )
    }
};

export default TodoListTasks;


TodoListTasks.propTypes = {
    title: PropTypes.string,
    isDone: PropTypes.bool,
    priority: PropTypes.string,
}

