import React, { createContext, useReducer } from 'react';
import { useEffect } from 'react';
import { taskReducer } from '../reducers/TaskReducers';


export const TaskContext = createContext();


const TaskContextProvider = (props) => {
    const [tasks, dispatch] = useReducer(taskReducer,[]);
    useEffect(() => {
        fetch('http://127.0.0.1:8000/task_app/')
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to fetch tasks');
                }
            })
            .then((data) => {
                dispatch({ type: 'SET_TASKS', tasks: data });
            })
            .catch((err) => {
                console.log('Error fetching tasks:', err);
            });
    }, []);

    return (
        <TaskContext.Provider value={{ tasks, dispatch }}>

            {props.children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;

