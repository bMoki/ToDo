import { useState } from 'react';
import styles from './App.module.css';
import { Form } from './components/Form';
import { Header } from './components/Header';
import { List } from './components/List';
import './global.css';
import { TaskType } from './Types';



function App() {

  const [tasks, setTasks] = useState<TaskType[] | []>([]);
  let checkedTasks: TaskType[] = tasks.filter(task => {
    return task.isChecked;
  });
  let uncheckedTasks: TaskType[] = tasks.filter(task => {
    return !task.isChecked;
  });

  const createdTasks = tasks.length;
  const doneTasks = checkedTasks.length;


  function handleCheckButton(element: TaskType) {
    const updatedTask: TaskType = { ...element, isChecked: !element.isChecked };

    if (element.isChecked) {
      uncheckedTasks.push(updatedTask);
      checkedTasks = checkedTasks.filter(task => {
        return task.id !== updatedTask.id;
      });
    } else {
      checkedTasks.unshift(updatedTask);
      uncheckedTasks = uncheckedTasks.filter(task => {
        return task.id !== updatedTask.id;
      });
    }

    setTasks([...uncheckedTasks, ...checkedTasks]);
  }

  function handleNewTask(newTask: TaskType) {
    uncheckedTasks.push(newTask);
    setTasks([...uncheckedTasks,...checkedTasks]);
  }

  function handleDeleteTask(deletedTask: TaskType) {
    const TasksWithoutDeletedOne = tasks.filter(task => {
      return task.id !== deletedTask.id;
    });
    setTasks(TasksWithoutDeletedOne);
  }

  return (
    <div>
      <Header />
      <Form handleNewTask={handleNewTask} />
      <div className={styles.wrapper}>
        <List
          tasks={tasks}
          handleCheckButton={handleCheckButton}
          handleDeleteTask={handleDeleteTask}
          doneTasks={doneTasks}
          createdTasks={createdTasks}
        />
      </div>
    </div>
  )
}

export default App
