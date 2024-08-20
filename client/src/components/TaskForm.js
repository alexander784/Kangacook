import React, { useState } from 'react';

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const taskData = {
            name: taskName, 
        };

    }

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
