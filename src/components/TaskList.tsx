import { ClipboardText, Trash} from "phosphor-react";
import styles from "./TaskList.module.css";

type Task = {
  id: number;
  title: string;
  isDone: boolean;
};

interface TaskListProps {
  tasks: Task[];
  onDoneTask: (taskId: number) => void;
  onDeleteTask: (taskId: number) => void;
}

export function TaskList({ tasks, onDoneTask, onDeleteTask }: TaskListProps) {
  function handleCheckChange(taskId: number) {
    onDoneTask(taskId);
  }

  function handleDeleteTask(taskId: number) {
    onDeleteTask(taskId);
  }

  const totalTasksCreated = tasks.length;
  const totalTasksDone = tasks.reduce(
    (acc, cur) => acc + Number(cur.isDone),
    0,
  );

  return (
    <div className={styles.taskList}>
      <header>
        <strong className={styles.createCount}>
          Tarefas criadas
          <span>{totalTasksCreated}</span>
        </strong>
        <strong className={styles.doneCount}>
          Concluídas
          <span>
              {totalTasksCreated === 0
                ? totalTasksCreated
                : `${totalTasksDone} de ${totalTasksCreated}`}
          </span>
        </strong>
      </header>
      {tasks.length === 0 ? (
        <div className={styles.taskListEmpty}>
          <ClipboardText size={56} />
          <div className={styles.taskListEmptyDescription}>
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        </div>
      ) : (
        <div className={styles.taskListContainer}>
          {tasks.map((task) => {
            return (
              <div key={task.id} className={styles.taskListItem}>
                <input
                  className={styles.checkbox}
                  type="checkbox"
                  checked={task.isDone}
                  onChange={() => handleCheckChange(task.id)}
                />
                <p
                  className={
                    task.isDone
                      ? styles.titleTaskCompleted
                      : styles.titleTask
                  }>
                  {task.title}
                </p>
                <Trash
                  role="button"
                  className={styles.removeIcon}
                  size={20}
                  onClick={() => handleDeleteTask(task.id)}
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}