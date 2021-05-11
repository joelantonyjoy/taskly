import { useContext} from 'react';
import styles from './TaskList.module.css';
import {TaskContext} from '../../contexts/TaskContext'

const TaskList = () =>{
    const [tasks,setTasks] = useContext(TaskContext);
    const changeStatus = (modifiedTaskId) => {
        setTasks((prev)=>{
            return prev.map(a=>a.id===modifiedTaskId?{...a,isDone:!a.isDone}:{...a})
        })
    }
    return(
        <ul>
            {tasks.length>0?tasks.map(task => {
                return(
                    <li onClick={()=>{changeStatus(task.id)}} key={task.id} className={task.isDone?styles.done:styles.notDone}>{task.name} <span>{task.points} points</span></li>
                );
            }):(
                <div className={styles.noTask}>Try adding a task :)</div>
            )}
        </ul>
    );
}
export default TaskList;