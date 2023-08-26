import { useState } from "react";
import { ITask } from "../interfaces/Task";
import { UseTaskListType } from "../types/MyTypes";

const useTasksList = (): UseTaskListType => {
  const [taskList, setTaskList] = useState<ITask[]>(() => {
    const storedTask: string | null = localStorage.getItem("tasks-list");
    if (!storedTask) return [];
    return JSON.parse(storedTask);
  });

  const [openModal, setOpenModal] = useState(false);
  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);

  const handleDeleteTask = (id: number): void => {
    // deleta uma tarefa
    setTaskList((prev) => {
      const newState: ITask[] = prev.filter((task) => task.id !== id);
      localStorage.setItem("tasks-list", JSON.stringify(newState));
      return newState;
    });
  };

  const handleEditTask = (task: ITask): void => {
    // abre o modal e edita a tarefa específica da lista
    setOpenModal(true);
    setTaskToUpdate(task);
  };

  const handleUpdateTask = (id: number, title: string): void => {
    // Edita a tarefa específica da lista com base no id

    // cria um objeto com a tarefa específica a ser atualizada
    const updatedTask: ITask = { id, title };

    // setTaskList(updatedItems);
    setTaskList((prev) => {
      const updatedItems: ITask[] = prev.map((task) =>
        task.id === updatedTask.id ? updatedTask : task,
      );

      localStorage.setItem("tasks-list", JSON.stringify(updatedItems));
      return updatedItems;
    });
    setOpenModal(false);
  };

  return {
    taskList,
    setTaskList,
    taskToUpdate,
    handleDeleteTask,
    handleEditTask,
    handleUpdateTask,
    openModal,
    setOpenModal,
  };
};

export default useTasksList;
