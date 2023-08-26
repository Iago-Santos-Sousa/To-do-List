import { ITask } from "../interfaces/Task";

export type UseTaskListType = {
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  taskToUpdate: ITask | null;
  handleDeleteTask: (id: number) => void;
  handleEditTask: (task: ITask) => void;
  handleUpdateTask: (id: number, title: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TaskListType = {
  taskList: ITask[];
  handleDeleteTask: (id: number) => void;
  handleEditTask: (task: ITask) => void;
};

export type ModalType = {
  children: React.ReactNode;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HandleType = {
  updateTask: () => void;
};
