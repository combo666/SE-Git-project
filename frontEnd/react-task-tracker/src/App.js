import './App.css';
import Header from './components/Header'
import Tasks from './components/Tasks'
import {useState} from 'react'
import AddTask from './components/AddTask';

function  App() {
  const [tasks, setTasks] = useState(
    [
      {
        id: 1,
        name: "Complete Project Proposal",
        time: "2024-02-14T10:00:00",
        small_details: "Draft and finalize the project proposal for client meeting.",
        reminder: true
      },
      {
        id: 2,
        name: "Meeting with Team",
        time: "2024-02-15T14:30:00",
        small_details: "Discuss project updates, address concerns, and plan for the next sprint.",
        reminder: false
      },
      {
        id: 3,
        name: "Prepare Presentation",
        time: "2024-02-16T09:00:00",
        small_details: "Create slides for the upcoming conference presentation.",
        reminder: true
      }
    ]
    
    
  )

  //Delete Task
  const deleteTask = (id) =>
  {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) =>
  {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder } : task))
  }

  return (
    <div className='container'>
      <Header title = 'Task Tracker'/>
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Task Left'}
    </div>
  );
}

export default App;
