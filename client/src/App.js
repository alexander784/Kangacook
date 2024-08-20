import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import TaskContextProvider from './context/TaskContext';

function App() {
  return (
    <>
    <Navbar />
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
    </>
  );
}

export default App;
