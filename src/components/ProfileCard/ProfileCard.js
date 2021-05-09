import user from '../../images/user.svg'
import styles from './ProfileCard.module.css'
import {TaskContext} from '../../contexts/TaskContext'
import { useContext, useState } from 'react'
const ProfileCard = () =>{
  const [tasks, setTasks] = useState(useContext(TaskContext));
  const [completedTasks, setCompletedTasks] = useState(tasks.filter((a) => {return a.isDone === true}));
  let completedTasksPoints = completedTasks.map(a=>a.points);
  let totalPoints = completedTasksPoints.length === 0? 0 : completedTasksPoints.reduce((a,b)=>a+b)
  console.log(completedTasksPoints);
    return(
        <div className={styles.profile}>
          <img alt='user' src={user}/>
          <span className={styles.userName}>Maria</span>
          <span className={styles.userPoints}>
            {totalPoints} points</span>
        </div> 
    );
}
export default ProfileCard;