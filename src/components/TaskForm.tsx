import { useState, useEffect, FormEvent } from "react";
import { ITask } from "../interfaces/Task";
import { TaskFormType } from "../interfaces/TaskFormInterface";
import { HandleType } from "../types/MyTypes";

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  taskToUpdate,
  handleUpdateTask,
}: TaskFormType): JSX.Element => {
  const [idTask, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  // console.log({ title });
  // console.log(typeof setTaskList);

  const handlers: HandleType = {
    updateTask: () => {
      // altera tarefa
      if (handleUpdateTask) {
        handleUpdateTask(idTask, title);
      }
    },
  };

  useEffect(() => {
    // quando existir uma tarefa para atualizar
    if (taskToUpdate) {
      setId(taskToUpdate.id);
      setTitle(taskToUpdate.title);
    }
  }, [taskToUpdate]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (taskList) {
      if (title.trim() === "") {
        // verifica se o input esta vazio
<<<<<<< HEAD
=======
        setErrorMessage("O campo não pode estar vazio");
>>>>>>> parent of cd1d13a (cm-08)
        return;
      }
      handlers.updateTask();
      setTitle("");
      setErrorMessage("");
    }

    // Adiciona tarefa
    const id: number = Math.floor(Math.random() * 1000);
    const newTask: ITask = { id, title };
    if (typeof setTaskList === "function") {
      // verifica se setTaskList é uma função para evitar erro no compilador
      setTaskList!((prev) => {
        const newState: ITask[] = [...prev, newTask];
        localStorage.setItem("tasks-list", JSON.stringify(newState));
        return newState;
      });
    } else {
      return;
    }
    setErrorMessage("");
  };

  return (
    <div className="form-container" id="form-tasks">
      <form onSubmit={addTaskHandler}>
        <div className="">
          <input
            className="task-input"
            type="text"
            name="title"
            placeholder="Sua tarefa"
            value={title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
          />
        </div>
        <button type="submit">{btnText}</button>
      </form>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default TaskForm;
