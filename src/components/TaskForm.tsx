import { useState, useEffect } from "react";
import { ITask } from "../interfaces/Task";

const TaskForm = ({ btnText, taskList, setTaskList, taskToUpdate, handleUpdateTask }) => {
  const [id, setId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    // quando existir uma tarefa para atualizar
    if (taskToUpdate) {
      setId(taskToUpdate.id);
      setTitle(taskToUpdate.title);
    }
  }, [taskToUpdate]);

  const addTaskHandler = (e) => {
    // Adiciona tarefa
    e.preventDefault();

    if (taskList) {
      if (handleUpdateTask) {
        handleUpdateTask(id, title);
      } else {
        const id = Math.floor(Math.random() * 1000);
        const newTask: ITask = { id, title };
        // setTaskList!([...taskList, newTask]);
        setTaskList!(() => {
          const newState = [...taskList, newTask];
          localStorage.setItem("tasks-list", JSON.stringify(newState));
          return newState;
        });
      }
    }
  };

  // const handleChange = (e) => {
  //   // Seta a tarefa no title
  //   if (e.target.name === "title") {
  //     setTitle(e.target.value);
  //   }
  // };

  return (
    <form onSubmit={addTaskHandler}>
      <div className="">
        <label htmlFor="title">Título:</label>
        <input
          type="text"
          name="title"
          id=""
          placeholder="Título da tarefa"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;
