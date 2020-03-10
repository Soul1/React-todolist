import React from 'react'
import PropTypes from 'prop-types';

class TodoListTask extends React.Component {

  state = {
    editMode: false,
  };

  onIsDoneChanged = (e) => {
    this.props.changeStatus(this.props.task, e.currentTarget.checked)
  };
  onTitleChanged = (e) => {
    this.props.changeTitle(this.props.task, e.target.value)
  };

  activatedEditMode = () => {
    this.setState({
      editMode: true
    })
  };
  deActivatedEditMode = () => {
    this.setState({
      editMode: false
    })
  };

  render = () => {
    return (
      <div className="todoList-task">
        <input onChange={this.onIsDoneChanged}
               type="checkbox"
               checked={this.props.task.isDone}/>

        <span className={this.props.task.isDone ? 'taskCompleted' : ''}>
          {this.props.task.id} - &nbsp;
        </span>
        {this.state.editMode ?
          <input
            value={this.props.task.title}
            onChange={this.onTitleChanged}
            autoFocus={true}
            onBlur={this.deActivatedEditMode}

          />
          : <span onClick={this.activatedEditMode} className={this.props.task.isDone ? 'taskCompleted' : ''}>

            {this.props.task.title},</span>}

        <span className={this.props.task.isDone ? 'taskCompleted' : ''}>
          priority: {this.props.task.priority}
        </span>

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