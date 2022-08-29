import { TaskType } from '../Types';
import { Empty } from './Empty';
import styles from './List.module.css';
import { Task } from './Task';

interface Props {
    tasks: TaskType[];
    handleCheckButton: (element: TaskType) => void;
    handleDeleteTask: (deletedTask: TaskType) => void;
    createdTasks: number;
    doneTasks: number;

}

export function List({ tasks, handleCheckButton, handleDeleteTask, createdTasks, doneTasks }: Props) {


    return (
        <div className={styles.list}>
            <header>
                <div className={styles.criadas}>
                    <strong>Tarefas criadas</strong>
                    <span className={styles.listSpan}>{createdTasks}</span>
                </div>
                <div className={styles.concluidas}>
                    <strong>Concluídas</strong>
                    <span className={styles.listSpan}>{`${doneTasks} de ${createdTasks}`}</span>
                </div>
            </header>

            <div className={styles.tarefas}>
                {tasks.length === 0 ?
                    <Empty /> :
                    tasks.map(obj => {
                        return (
                            <Task task={obj} key={obj.id} handleCheckButton={handleCheckButton} handleDeleteTask={handleDeleteTask} />
                        )
                    })

                }

            </div>
        </div>
    )
}