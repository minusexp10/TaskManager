import { useState } from 'react';
import TaskList from './TaskList';

function App() {
  const [tasks, setTasks] = useState([]);
  
  const addList = (newList) => setTasks(newList);

  return (
    <div>
      <TaskList list={tasks} addList={addList} />
    </div>
  );
}

export default App;
