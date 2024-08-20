import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskList = () => {
    const { tasks, dispatch } = useContext(TaskContext);

    const handleDelete = (id) => {
        dispatch({ type: 'REMOVE_TASK', id });
    };

  return (
    <div className='mt-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Your Tasks</h2>
        <ul className='space-y-2'>
            
        {tasks.length ? (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            <div>{task.name}</div>
                            <button onClick={() => handleDelete(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <div>No tasks to display</div>
            )}
            </ul>

    </div>
  )
}



export default TaskList;