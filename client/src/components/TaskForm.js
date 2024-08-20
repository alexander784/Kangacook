import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = () => {
    const { dispatch } = useContext(TaskContext);
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = { name: taskName };

        fetch('http://127.0.0.1:8000/task_app/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newTask),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to add task');
            }
        })
        .then((task) => {
            dispatch({ type: 'ADD_TASK', task: { ...task, id: task.id } });
            setTaskName('');
        })
        .catch((err) => {
            console.log('Error adding task:', err);
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type='text' 
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder='Enter task'
                required
                className="border rounded p-2 mr-2"
            />
            <button 
                className="bg-purple-400 rounded-sm w-20 h-10"
                type='submit'>
                Add Task
            </button>
        </form>
    );
};

export default TaskForm;
