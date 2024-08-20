import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleDelete = (id) => {
        fetch(`http://127.0.0.1:8000/task_app/${id}/`, {
            method: 'DELETE',
        })
        .then(response => {
            if (response.ok) {
                dispatch({ type: 'REMOVE_TASK', id });
            } else {
                throw new Error('Failed to delete task');
            }
        })
        .catch(err => console.log('Error deleting task:', err));
    };

    return (
        <div className='mt-8'>
            <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Your Tasks</h2>
            <ul className='space-y-2'>
                {tasks.length ? (
                    tasks.map((task) => (
                        <li key={task.id}
                         className='bg-white p-4 border rounded shadow-sm'>
                            <div className='flex justify-between items-center'>
                                <span>{task.name}</span>
                                <button 
                                    onClick={() => handleDelete(task.id)} 
                                    className='bg-red-500 text-white px-2 py-1 rounded'
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                ) : (
                    <li className='bg-gray-100 p-4 rounded text-center'>
                        No tasks to display
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TaskList;
