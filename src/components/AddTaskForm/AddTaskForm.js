import { useContext, useState } from 'react';
import styles from './AddTaskForm.module.css';
import {v4 as uuidv4} from 'uuid';
import {TaskContext} from '../../contexts/TaskContext';

const AddTaskForm = () => {
    
    const [task, setTask] = useState({
        name: '',
        points: '',
        isDone: false,
    });

    const [tasks, setTasks] = useContext(TaskContext);

    const addNewTask = (e) =>{
        e.preventDefault();
        setTasks(previousTasks=>[...previousTasks,{...task,id:uuidv4()}]);
        setTask(task=>({
            ...task,
            name: '',
            points: '',
        }))
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
            points : +event.target.value,
        }));
    }

    return(
        <form onSubmit={(e)=>addNewTask(e)}>
            <h1 className={styles.heading}>Add New Task</h1>
            <div className={styles.inputGroup}>
                <input autocomplete='off' name='name' type='text' placeholder='Task name' value={task.name} onChange={handleNameInputChange} required></input>
                <input name='points' type='number' placeholder='Task points' value={task.points} onChange={handlePointsInputChange} required></input>
            </div>
            <button>
                Create Task
            </button>
        </form>
    )
}

export default AddTaskForm;