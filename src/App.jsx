import React from 'react';
import './App.css';
import TodoListHeader from './Components/TodoListHeader'
import TodoListTasks from './Components/TodoListTasks'
import TodoListFooter from './Components/TodoListFooter'

class App extends React.Component {
    tasks = [
        {title:'CSS', isDone:true, priority: 'medium'},
        {title:'JS', isDone:true, priority: 'high'},
        {title:'HTML', isDone:true, priority: 'low'},
        {title:'REACT', isDone:false, priority: 'high'},
    ]

    filterValue = 'All'

    render = () => {

        return (
            <div className="App">
                <div className="todoList">
                    <TodoListHeader />
                    <TodoListTasks tasks={this.tasks}/>
                    <TodoListFooter filterValue={this.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

