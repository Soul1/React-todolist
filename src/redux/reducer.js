import {api} from "./api";

const ADD_TODOLIST_SUCCESS = "TodoList/Reducer/ADD_TODOLIST_SUCCESS";
const DELETE_TODOLIST_SUCCESS = "TodoList/Reducer/DELETE_TODOLIST_SUCCESS";
const DELETE_TASK_SUCCESS = "TodoList/Reducer/DELETE_TASK_SUCCESS";
const UPDATE_TODOLIST_TITLE_SUCCESS = "TodoList/Reducer/UPDATE_TODOLIST_TITLE_SUCCESS";
const ADD_TASK_SUCCESS = "TodoList/Reducer/ADD_TASK_SUCCESS";
const SET_TASKS_SUCCESS = "TodoList/Reducer/SET_TASKS_SUCCESS";
const UPDATE_TASK_SUCCESS = "TodoList/Reducer/UPDATE_TASK_SUCCESS";
const SET_TODOLISTS_SUCCESS = "TodoList/Reducer/SET_TODOLISTS_SUCCESS";

const initialState = {
    todolists: []
};

const todolistReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TASKS_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) {
                        return tl;
                    } else {
                        return {...tl, tasks: action.tasks}
                    }
                })
            };
        case SET_TODOLISTS_SUCCESS:
            return {
                ...state,
                todolists: action.todolists.map(tl => ({...tl, tasks: []}))
            };
        case ADD_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: [action.newTodolist, ...state.todolists]
            };
        case DELETE_TODOLIST_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.filter(tl => tl.id !== action.todolistId)
            };
        case UPDATE_TODOLIST_TITLE_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id !== action.todolistId) return tl;
                    else return {...tl, title: action.title}
                })
            };
        case DELETE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.filter(t => t.id !== action.taskId)
                        }
                    } else {
                        return tl
                    }
                })
            };
        case ADD_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {...tl, tasks: [action.newTask, ...tl.tasks]}
                    } else {
                        return tl
                    }
                })
            };
        case UPDATE_TASK_SUCCESS:
            return {
                ...state,
                todolists: state.todolists.map(tl => {
                    if (tl.id === action.todolistId) {
                        return {
                            ...tl,
                            tasks: tl.tasks.map(t => {
                                if (t.id !== action.taskId) {
                                    return t;
                                } else {
                                    return {...t, ...action.obj};
                                }
                            })
                        }
                    } else {
                        return tl
                    }
                })
            };


        default:
            return state
    }
};

export default todolistReducer;

// Action
const updateTaskSuccess = (taskId, obj, todolistId) => ({type: UPDATE_TASK_SUCCESS, taskId, obj, todolistId});
const deleteTodoSuccess = (todolistId) => ({type: DELETE_TODOLIST_SUCCESS, todolistId: todolistId});
const deleteTaskSuccess = (todolistId, taskId) => ({type: DELETE_TASK_SUCCESS, todolistId, taskId});
const updateTodolistTitleSuccess = (todolistId, title) => ({type: UPDATE_TODOLIST_TITLE_SUCCESS, todolistId, title});
const addTaskSuccess = (newTask, todolistId) => ({type: ADD_TASK_SUCCESS, newTask, todolistId});
const getTasksSuccess = (tasks, todolistId) => ({type: SET_TASKS_SUCCESS, tasks, todolistId});
const addTodolistSuccess = (newTodolist) => ({type: ADD_TODOLIST_SUCCESS, newTodolist: newTodolist});
const getTodolistsSuccess = (todolists) => ({type: SET_TODOLISTS_SUCCESS, todolists: todolists});

// Thunk
export const getTodolists = () => (dispatch) => {
    api.getTodolists()
        .then(res => {
            dispatch(getTodolistsSuccess(res.data));
        })
};

export const addTodolist = (title) => (dispatch) => {
    api.createTodolist(title)
        .then(res => {
            let todolist = res.data.data.item;
            dispatch(addTodolistSuccess(todolist))
        });
};

export const getTasks = (todoId) => (dispatch) => {
    api.getTasks(todoId)
        .then(res => {
            let allTasks = res.data.items;
            dispatch(getTasksSuccess(allTasks, todoId))
        });
};

export const addTask = (title, todoId) => (dispatch) => {
    api.createTask(title, todoId)
        .then(res => {
            let newTask = res.data.data.item;
            dispatch(addTaskSuccess(newTask, todoId))
        });
};

export const changeTask = (taskId, todoId, task, obj) => (dispatch) => {
    api.updateTask(taskId, todoId, task)
        .then(res => {
            dispatch(updateTaskSuccess(taskId, obj, todoId))
        })
};

export const deleteTodo = (todoId) => (dispatch) => {
    api.deleteTodolist(todoId)
        .then(res => {
            dispatch(deleteTodoSuccess(todoId))
        });
};


export const deleteTask = (taskId, todoId) => (dispatch) => {
    api.deleteTask(taskId, todoId)
        .then(res => {
            dispatch(deleteTaskSuccess(todoId, taskId))
        });
};

export const updateTitle = (title, todoId) => (dispatch) => {
    api.updateTodolistTitle(title, todoId)
        .then(res => {
            dispatch(updateTodolistTitleSuccess(todoId, title))
        });
};






