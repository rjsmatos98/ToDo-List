import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { PlusCircle } from "phosphor-react";
import styles from './Task.module.css';

interface NewTaskProps {
    onCreateNewTask: (title: string) => void;
  }

export function Task({ onCreateNewTask }: NewTaskProps) {
    const [newTaskText, setNewTaskText] = useState('');

    function handleCrateNewTask(event: FormEvent) {
        event.preventDefault();
        onCreateNewTask(newTaskText);
        setNewTaskText("");
      }
    
      function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity("");
        setNewTaskText(event.target.value);
      }
    
      function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity("Esse campo é obrigatório");
      }

    const isNewTaskEmpty = newTaskText.length === 0;

    return (
        <>
            <form onSubmit={handleCrateNewTask} className={styles.task}>
                <input
                    type="text"
                    name="task"
                    placeholder="Adicione uma nova tarefa"
                    value={newTaskText}
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                />
                <button type="submit" disabled={isNewTaskEmpty}>
                    Criar <PlusCircle size={16} />
                </button>
            </form>
        </>
    );
}