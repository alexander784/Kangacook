import React, { useEffect, useState } from 'react'

const TaskList = () => {

    const [tasks,setTasks] = useState([]);
    useEffect(() => {
        fetch("http://127.0.0.1:8000/task_app/")
        .then((response) => {
            if (response.ok) {
                return response.json();
            } else {
                throw new Error('Failed to fetch');
            }
        })
        .then((data) => {
            setTasks(data);
        })
        .catch((err) => {
            console.log('Error in fetch')
            // setError('Error fetching Tasks')
        });
    },[])
    

  return (
    <div className='mt-8'>
        <h2 className='text-2xl font-semibold text-gray-700 mb-4'>Your Tasks</h2>
        <ul className='space-y-2'>
            {
                tasks.map(tasks => (
                    <li key={tasks.id}
                    className='bg-white p-4'>
                        {tasks.name}

                    </li>
                ))
            }
        </ul>

    </div>
  )
}


export default TaskList;