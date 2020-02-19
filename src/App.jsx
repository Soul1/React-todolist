import React from 'react';
import './App.css';
import TodoListHeader from './Components/TodoListHeader';
import TodoListTasks from './Components/TodoListTasks';
import TodoListFooter from './Components/TodoListFooter';


class App extends React.Component {

    constructor(props) {
        super(props);
        this.newTaskTitleRef = React.createRef();
    }

    state = {
        tasks: [
            {title: 'CSS', isDone: true, priority: 'medium'},
            {title: 'JS', isDone: true, priority: 'high'},
            {title: 'HTML', isDone: true, priority: 'low'},
            {title: 'REACT', isDone: false, priority: 'high'},
        ],
        filterValue: 'All',

    }

    onAddTaskClick = () => {
        let text = this.newTaskTitleRef.current.value !== ''? this.newTaskTitleRef.current.value : 'Нет значения'
        let newTask = {title: text, isDone: false, priority: 'low'};
        let newTasks = [...this.state.tasks, newTask];
        this.newTaskTitleRef.current.value = ''
        this.setState({
            tasks: newTasks,
        });
    }

    render = () => {

        return (
            <div className="App">

                <div className="todoList">
                    <TodoListHeader onAddTaskClick={this.onAddTaskClick} refTitleTask={this.newTaskTitleRef}/>
                    <TodoListTasks tasks={this.state.tasks}/>
                    <TodoListFooter filterValue={this.state.filterValue}/>
                </div>
            </div>
        );
    }
}

export default App;

