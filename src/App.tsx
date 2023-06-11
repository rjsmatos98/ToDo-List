import { Header } from './components/Header';
import { Task } from './components/Task';
import { TaskList } from "./components/TaskList";

import './global.css';

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  function addNewTask(newTaskText: string) {
    const id = Math.max(...tasks.map((task) => task.id + 1), 1);
    const newTask: Task = { id, title: newTaskText, isDone: false };
    setTasks((tasks) => [...tasks, newTask]);
  }

  function handleDeleteTask(taskId: number) {
    setTasks((tasks) => {
      return tasks.filter((taskItem) => taskItem.id !== taskId);
    });
  }

  function handleCheckChange(taskId: number) {
    setTasks((tasks) => {
      return tasks.map((taskItem) => {
        if (taskItem.id === taskId) {
          return {
            ...taskItem,
            isDone: !taskItem.isDone,
          };
        }
        return taskItem;
      });
    });
  }

  return (
    <>
      <Header />
      <Task
        onCreateNewTask={addNewTask}
      />
      <TaskList
        onDoneTask={handleCheckChange}
        onDeleteTask={handleDeleteTask}
        tasks={tasks}
      />
    </>
  )
}

export default App
