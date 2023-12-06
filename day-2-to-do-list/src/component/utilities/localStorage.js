const getStoreTask = ()=>{
    const storedTaskString =  localStorage.getItem('tasks')

    if(storedTaskString){
        return JSON.parse(storedTaskString)
    }
    return []
}

const saveToLs = (tasks)=>{
    const tasksStringified = JSON.stringify(tasks)
    localStorage.setItem('tasks',tasksStringified);

}

const addToLS = (task)=>{
    const tasks = getStoreTask();
    tasks.push(task);
    //save to localstorage
    saveToLs(tasks);

}

const deleteTaskFromLs = (task)=>{
    const tasks = getStoreTask();
    const position = tasks.indexOf(task);
    tasks.splice(position, 1);
    const newTask = [...tasks];
    saveToLs(newTask)
    
}

export {addToLS,getStoreTask,saveToLs,deleteTaskFromLs}