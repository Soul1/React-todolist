import React from 'react';
import '../App.css';
import TodoListTitle from './TodoListTitle';
import TodoListTasks from './TodoListTasks';
import TodoListFooter from './TodoListFooter';
import AddNewItemForm from "./AddNewItemForm";


class TodoList extends React.Component {

  saveState = () => {
    let stateAsString = JSON.stringify(this.state)
    localStorage.setItem('out-state-' + this.props.id, stateAsString)
  };

  restoreState = () => {
    let state = {
      tasks: [],
      filterValue: 'All',
      newTaskId: 0,
    };
    let stateAsString = localStorage.getItem('out-state-' + this.props.id);
    if (stateAsString != null) {
      state = JSON.parse(stateAsString)
    }
    this.setState(state)
  };
  state = {
    tasks: [],
    filterValue: 'All',
    newTaskId: 0,
  };

  componentDidMount() {
    this.restoreState()
  }

  addItem = (newText) => {
    let newTask = {
      id: this.state.newTaskId,
      title: newText,
      isDone: false,
      priority: 'low'
    };
    this.state.newTaskId++;
    let newTasks = [...this.state.tasks, newTask];
    this.setState({
      tasks: newTasks
    }, () => this.saveState());
  };

  changeFilter = (newFilterValue) => {
    this.setState({
      filterValue: newFilterValue
    }, () => this.saveState());
  };

  changeTask = (task, obj) => {
    let newTasks = this.state.tasks.map(t => {
      if (t === task) {
        return {...t, ...obj}
      } else {
        return t
      }
    });
    this.setState({
      tasks: newTasks
    }, () => this.saveState())
  };


  changeStatus = (task, isDone) => {
    this.changeTask(task, {isDone})
  };

  changeTitle = (task, title) => {
    this.changeTask(task, {title})
  };

  render = () => {
    return (
      <div className="todoList">
        <div className='todoList-header'>
          <TodoListTitle title={this.props.title}/>
          <AddNewItemForm addItem={this.addItem}/>
        </div>
        <TodoListTasks
          changeStatus={this.changeStatus}
          changeTitle={this.changeTitle}
          tasks={this.state.tasks.filter(t => {
            if (this.state.filterValue === 'All') {
              return true
            }
            if (this.state.filterValue === 'Completed') {
              return t.isDone === true;
            }
            if (this.state.filterValue === 'Active') {
              return t.isDone === false;
            }
          })}/>
        <TodoListFooter changeFilter={this.changeFilter}
                        filterValue={this.state.filterValue}/>
      </div>
    );
  }
}

export default TodoList;

