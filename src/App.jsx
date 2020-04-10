import React from 'react';
import TodoList from "./TodoList";
import AddNewItemForm from "./AddNewItemForm";
import {repository} from "./repository";

class MainTodoList extends React.Component {
  saveState = () => {
    repository.saveTodolists(this.state)
  };
  restoreState = () => {
    let todolists = repository.getTodolists();
    if(todolists != null ){
    this.setState(todolists)
    }
  };

  componentDidMount() {
    this.restoreState()
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
      .map(tl => <TodoList key={tl.id} id={tl.id} title={tl.title}/>);
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

export default MainTodoList;

