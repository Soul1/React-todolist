import React from 'react';
import './App.css';
import TodoListHeader from './Components/TodoListheader';
import TodoListTasks from './Components/TodoListTasks';
import TodoListFooter from './Components/TodoListFooter';


class App extends React.Component {

  newTaskTitleRef = React.createRef();

  saveState = () => {
    let stateAsString = JSON.stringify(this.state)
    localStorage.setItem('out-state', stateAsString)
  };

  restoreState = () => {
    let state = {
      tasks: [],
      filterValue: 'All',
      newTaskId: 0,
    };
    let stateAsString = localStorage.getItem('out-state');
    if (stateAsString != null){
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

  addTask = (newText) => {
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
      <div className="App">

        <div className="todoList">
          <TodoListHeader addTask={this.addTask} refTitleTask={this.newTaskTitleRef}/>
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
      </div>
    );
  }
}

export default App;

