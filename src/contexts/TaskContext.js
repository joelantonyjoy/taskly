import React, { useState, createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState([]);
    return(
        <TaskContext.Provider value={[tasks,setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}