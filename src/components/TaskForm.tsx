import { useState, useEffect, FormEvent } from "react";
import { ITask } from "../interfaces/Task";
import { TaskFormType } from "../interfaces/TaskFormType";

const TaskForm = ({
  btnText,
  taskList,
  setTaskList,
  taskToUpdate,
  handleUpdateTask,
}: TaskFormType): JSX.Element => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    // quando existir uma tarefa para atualizar
    if (taskToUpdate) {
      setId(taskToUpdate.id);
      setTitle(taskToUpdate.title);
    }
  }, [taskToUpdate]);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>): void => {
    // Adiciona tarefa
    e.preventDefault();

    if (taskList) {
      // altera tarefa
      if (handleUpdateTask) {
        handleUpdateTask(id, title);
      } else {
        if (title.trim() === "") {
          // verifica se o input está vazio
          setErrorMessage("O campo não pode estar vazio");
          return;
        }
        // Adiciona tarefa
        const id: number = Math.floor(Math.random() * 1000);
        const newTask: ITask = { id, title };
        setTaskList!((prev) => {
          const newState: ITask[] = [...prev, newTask];
          localStorage.setItem("tasks-list", JSON.stringify(newState));
          return newState;
        });
      }
    }
  };

  return (
    <form onSubmit={addTaskHandler}>
      <div className="">
        <input
          type="text"
          name="title"
          id=""
          placeholder="Título da tarefa"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
      </div>
      {errorMessage && <p>{errorMessage}</p>}
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
