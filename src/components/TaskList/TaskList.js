import { useContext, useState } from 'react';
import styles from './TaskList.module.css'
import {TaskContext} from '../../contexts/TaskContext'

const TaskList = () =>{
    const [tasks,setTasks] = useState(useContext(TaskContext));
    return(
        <ul>
            {tasks.map(task => {
                return(
                    <li className={task.isDone?styles.done:styles.notDone}>{task.name} <span>{task.points} points</span></li>
                );
            })}
        </ul>
    );
}
export default TaskList;