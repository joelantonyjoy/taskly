import React, { useState, createContext} from 'react';

export const TaskContext = createContext();

export const TaskProvider = (props) => {
    const [tasks, setTasks] = useState(
        [
            {   
                name:'Getup Early',
                points:1,
                isDone:true
            },
            {
                name:'Sleep Early',
                points:2,
                isDone:false
            }
        ]
    )
    return(
        <TaskContext.Provider value={tasks}>
            {props.children}
        </TaskContext.Provider>
    )
}