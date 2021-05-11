import user from '../../images/user.svg'
import styles from './ProfileCard.module.css'
import {TaskContext} from '../../contexts/TaskContext'
import { useContext,useEffect, useState } from 'react'
const ProfileCard = () =>{
  const [tasks] = useContext(TaskContext);
  const [completedTasks] = useState(tasks.filter(a=>a.isDone));
  const [completedTasksPoints] = useState(completedTasks.map(a=>a.points));
  const [totalPoints,setTotalPoints] = useState(completedTasksPoints.length === 0? 0 : completedTasksPoints.reduce((a,b)=>a+b));
  useEffect(()=>{
    let cp =tasks.filter(a=>a.isDone).map(a=>a.points);
    setTotalPoints(cp.length === 0? 0 : cp.reduce((a,b)=>a+b))
  },[tasks,completedTasks])
    return(
        <div className={styles.profile}>
          <img alt='user' src={user}/>
          <span className={styles.userName}>Joel</span>
          <span className={styles.userPoints}>
            {totalPoints} {totalPoints>1?'points':'point'}</span>
        </div> 
    );
}
export default ProfileCard;