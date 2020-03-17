import React from 'react';
import './App.css'
import TodoList from "./Components/TodoList";
import AddNewItemForm from "./Components/AddNewItemForm";

class App extends React.Component {
  saveState = () => {
    let stateAsString = JSON.stringify(this.state);
    localStorage.setItem('out-state-todolists', stateAsString)
  };

  restoreState = (state) => {

    let stateAsString = localStorage.getItem('out-state-todolists');
    if (stateAsString != null) {
      state = JSON.parse(stateAsString)
    }
    this.setState(state)
  };

  componentDidMount() {
    this.restoreState(this.state)
  }
  state = {
    todolists: [],
    todolistsId: 0
  };
  addItem = (newTitle) => {
    let nextID = this.state.todolistsId;
    let newTodoList = {
      id: nextID,
      title: newTitle,
    };
    let todolists = [...this.state.todolists, newTodoList];
    this.setState({
      todolists: todolists,
      todolistsId: this.state.todolists.length + 1
    }, () => this.saveState());
  };
  render = () => {
    const todolists = this.state
      .todolists
      .map(tl => <TodoList id={tl.id} title={tl.title}/>);
    return (
      <>
        <div>
          <AddNewItemForm addItem={this.addItem}/>
        </div>
        <div className='app-inner'>
          {todolists}
        </div>
      </>
    )
  }
}

export default App;

