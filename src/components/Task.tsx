import { Trash } from 'phosphor-react';
import { TaskType } from '../Types';
import { CheckButton } from './CheckButton';
import styles from './Task.module.css';

interface Props {
    task: TaskType,
    handleCheckButton: (element: TaskType) => void;
    handleDeleteTask: (deletedTask: TaskType) => void;
}



export function Task({ task, handleCheckButton, handleDeleteTask }: Props) {
    return (
        <div className={styles.tarefa}>
            <CheckButton checked={task.isChecked} onClick={() => handleCheckButton(task)} />
            <div className={styles.taskContent}>
                {task.isChecked ?
                    <del>{task.content}</del>
                    :
                    <p> {task.content} </p>
                }


            </div>
            <button className={styles.trash} onClick={() => handleDeleteTask(task)}>
                <Trash />
            </button>


        </div>
    )
}