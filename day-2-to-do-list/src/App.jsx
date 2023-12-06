import { useEffect, useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import icon from '/icon.png'
import './App.css'
import SearchBar from './component/SearchBar/SearchBar'
import Tasks from './component/Tasks/Tasks'
import { addToLS, deleteTaskFromLs, getStoreTask } from './component/utilities/localStorage'

function App() {

  const [tasks,setTasks] = useState([]);

  const handleTaskEntry = (task)=>{
    // const newTask = [...tasks,task]
    setTasks([...tasks,task])
    // console.log(tasks);
    addToLS(task);

  }
  const handleTaskDelete = (task)=>{
      const position = tasks.indexOf(task);
      tasks.splice(position, 1);
      const newTask = [...tasks];
      setTasks(newTask);
      deleteTaskFromLs(task);
      
  }

  useEffect(()=>{
    const storedTask = getStoreTask();
    setTasks(storedTask)
  },[])
  

  return (
    <div  className='container-bg w-full min-h-screen flex justify-center items-center'>
      <div className='bg-white min-w-[540px]  min-h-[400px] rounded-xl px-10 py-11 '>
          <div className='flex items-center'>
            <h1 className='text-3xl font-bold me-2'>To-Do-List</h1>
            <img src={icon}  className='w-10 h-8'/>
          </div>


          <SearchBar handleTaskEntry={handleTaskEntry}></SearchBar>
          <Tasks 
          tasks={tasks}
          handleTaskDelete={handleTaskDelete}
          ></Tasks>

      </div>

    </div>
  )
}

export default App
