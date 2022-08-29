import styles from './Form.module.css';
import { PlusCircle } from 'phosphor-react';
import { TaskType } from '../Types';
import { ChangeEvent, useState } from 'react';
import {v4 as uuidv4} from 'uuid';

interface Props {
    handleNewTask: (newTask: TaskType) => void;
}

export function Form({handleNewTask}:Props) {
    const [taskContent, setNewTaskContent] = useState('');

    function handleNewTaskChange (event: ChangeEvent<HTMLInputElement>){
        setNewTaskContent(event.target.value);
    }

    function createNewTask (){
        event?.preventDefault();
        setNewTaskContent('');
        const newTask:TaskType = {
            id: uuidv4(),
            isChecked: false,
            content: taskContent,
        }
        handleNewTask(newTask);
    }

    return (
        <div className={styles.form}>
            <form className={styles.form}>
                <input placeholder='Adicione uma nova tarefa' value={taskContent} onChange={handleNewTaskChange}/>
                <button onClick={createNewTask}>Criar<PlusCircle size={18} /></button>
            </form>
        </div>

    )
}