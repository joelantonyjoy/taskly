import './App.css';
import ProfileCard from './components/ProfileCard/ProfileCard';
import TaskList from './components/TaskList/TaskList';
import {TaskProvider} from './contexts/TaskContext';

function App() {
  return (
      <div className="App">
          <h1>Taskly</h1>
          <TaskProvider>
            <ProfileCard></ProfileCard>
            <TaskList></TaskList>
          </TaskProvider>
      </div>
  );
}

export default App;
