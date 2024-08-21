## Task Manager
A Task management application that allows users to add, view, and delete tasks. Built with Django for the backend and React for the frontend.

## Features
1. Add new task.
2. VIews a list of all tasks.
3. Delete task
4. Responsive UI Built with React.
5. Restful API built eith Django.

## Tech Stack
* Frontend: React,Tailwind
* Backend: Django, Django REST Framework
* Database: SQLite.
* State Management: useContext, Reducers


## Setup and Installation
   ## prerequisites:
   * python 3.10.12
   * Node.js
   * Django
   * Django REST Framework
   * React

## Backend SetUp
  1. Clone the repo: <br>
  ``git clone https://github.com/alexander784/Kangacook.git`` <br>
  ``cd Kangacook``

  2. Install dependecies: <br>
  ``pip install -r requirements.txt``
<br>
  3. Run migrations and start the djano development server.

   ``python3 manage.py migrate`` <br>
  ``python3 manage.py runserver``



### Frontend Setup
1. Navigate to the frontend directory: <br>
`cd client`

2. Install dependecies. <br>
`npm install`

3. Start the React development server:<br>
`npm start`

## Usage
 ## Adding a New Task
  1. Go to the `Add Task` section on the homepage. <br>
  2. Enter the task title and description.
  3. Click the `Add Task` button to submit.

  ## Viewing Tasks
  1. All tasks are listed on the homepage.
  2. The task list displays the title and description of each task.


## Deleting a Task
1. Click the "Delete" button next to the task you want to remove.
2. The task will be removed from the list.

## State Management
<p>State is managed globally using React's useContext hooks and reducers:</p>

**Context Provider**: Wraps the application, providing state and dispatch functions to components.

**Reducer**: Handles state updates for adding, deleting, and fetching tasks.


## API Endpoints:
`` GET /task_app/: Fetch all tasks``<br>
`` POST /task_app/: Add a new task``<br>
`` DELETE /tasks_app/{id}/: Delete a task by ID`` <br>

## Author: Alexander Nyaga.

## License:
<p> This project is licensed under the MIT License. See the LICENSE file for more details.</p>





