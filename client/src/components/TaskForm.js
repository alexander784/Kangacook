import React, { useState } from 'react'

const TaskForm = () => {
    const [taskName, setTaskName] = useState('');
  return (
    <form onSubmit={handleSubmit}>
        <input type='text' value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder='Enter task'
        required
        />
        <button className="bg-purple-400 rounded-sm w-20 h-15"type='submit'>Add Task</button>
    </form>
  )
}

export default TaskForm;