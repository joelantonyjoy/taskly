import { useContext} from 'react';
import styles from './TaskList.module.css';
import {TaskContext} from '../../contexts/TaskContext'

const TaskList = () =>{
    const [tasks] = useContext(TaskContext);
    return(
        <ul>
            {tasks.length>0?tasks.map(task => {
                return(
                    <li key={task.id} className={task.isDone?styles.done:styles.notDone}>{task.name} <span>{task.points} points</span></li>
                );
            }):(
                <div className={styles.noTask}>Try adding a task :)</div>
            )}
        </ul>
    );
}
export default TaskList;