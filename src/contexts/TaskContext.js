import React, { useState, createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState(
        [
            {   
                name:'Getup Early',
                points:1,
                isDone:true,
                id:1
            },
            {
                name:'Sleep Early',
                points:2,
                isDone:false,
                id:2
            }
        ]
    )
    return(
        <TaskContext.Provider value={[tasks,setTasks]}>
            {props.children}
        </TaskContext.Provider>
    )
}