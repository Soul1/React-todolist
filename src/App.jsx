import React from 'react';
import './App.css';
import TodoListHeader from './Components/TodoListHeader';
import TodoListTasks from './Components/TodoListTasks';
import TodoListFooter from './Components/TodoListFooter';


class App extends React.Component {

    newTaskTitleRef = React.createRef();

    state = {
        tasks: [
            {title: 'CSS', isDone: true, priority: 'medium'},
            {title: 'JS', isDone: true, priority: 'high'},
            {title: 'HTML', isDone: true, priority: 'low'},
            {title: 'REACT', isDone: false, priority: 'high'},
        ],
        filterValue: 'All',

    }

    addTask = (newText) => {
        let newTask = {
            title: newText,
            isDone: false,
            priority: 'low'
        }
        let newTasks = [...this.state.tasks, newTask]
        this.setState({
            tasks: newTasks
        })
    }

    changeFilter = (newFilterValue) => {
        this.setState({
            filterValue: newFilterValue
        });
    }

    changeStatus = (task, isDone) => {
        let newTasks = this.state.tasks.map(t => {
            if (t === task){
                return {...t, isDone: isDone}
            }else {
                return t
            }
        })
        this.setState({
            tasks: newTasks
        })
    }

    render = () => {

        return (
            <div className="App">

                <div className="todoList">
                    <TodoListHeader addTask={this.addTask} refTitleTask={this.newTaskTitleRef}/>
                    <TodoListTasks
                        changeStatus={this.changeStatus}
                        tasks={this.state.tasks.filter(t => {
                        if (this.state.filterValue === 'All'){
                            return true
                        }
                        if (this.state.filterValue === 'Completed'){
                            return t.isDone === true;
                        }
                        if (this.state.filterValue === 'Active'){
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

