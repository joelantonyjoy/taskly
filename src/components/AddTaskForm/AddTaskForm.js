import { useContext, useState } from 'react';
import styles from './AddTaskForm.module.css';
// import {v4 as uuidv4} from 'uuid';
import {TaskContext} from '../../contexts/TaskContext';


const AddTaskForm = () => {
    const [task, setTask] = useState({
        name: '',
        points: '',
    });
    const [tasks, setTasks] = useContext(TaskContext);

    const addNewTask = (e) =>{
        e.preventDefault();
        console.log(tasks,task);
        setTasks(previousTasks=>[...previousTasks,task]);
    }

    const handleNameInputChange = (event) => {
        setTask((task) => ({
            ...task,
            name : event.target.value,
        }));
    }

    const handlePointsInputChange = (event) => {
        setTask((task) => ({
            ...task,
            points : event.target.value,
        }));
    }

    return(
        <form onSubmit={(e)=>addNewTask(e)}>
            <h1>Add New Task</h1>
            <div className={styles.inputGroup}>
                <input name='name' type='text' placeholder='Task name' value={task.name} onChange={handleNameInputChange}></input>
                <input name='points' type='number' placeholder='Task points' value={task.points} onChange={handlePointsInputChange}></input>
            </div>
            <button>
                Create Task
            </button>
        </form>
    )
}

export default AddTaskForm;