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
  // console.log("lista com a tarefas", taskList);
  // console.log("lista com a tarefas atualizadas", taskToUpdate);

  const handleDeleteTask = (title: string): void => {
    // deleta uma tarefa
    setTaskList((prev) => {
      const newState: ITask[] = prev.filter((task) => task.title !== title);
      localStorage.setItem("tasks-list", JSON.stringify(newState));
      return newState;
    });
  };

  // const hideOrShowModal = (display: boolean): void => {
  //   // Mostra o Modal
  //   const modal: HTMLElement | null = document.getElementById("modal");
  //   if (display) {
  //     modal!.classList.remove("hide");
  //   } else {
  //     modal!.classList.add("hide");
  //   }
  // };

  const handleEditTask = (task: ITask): void => {
    // abre o modal e edita a tarefa específica da lista
    // hideOrShowModal(true);
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

    // hideOrShowModal(false);
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
