import { ITask } from "../interfaces/Task";

export type UseTaskListType = {
  taskList: ITask[];
  setTaskList: React.Dispatch<React.SetStateAction<ITask[]>>;
  taskToUpdate: ITask | null;
  handleDeleteTask: (title: string) => void;
  handleEditTask: (task: ITask) => void;
  handleUpdateTask: (id: number, title: string) => void;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TaskListType = {
  taskList: ITask[];
  handleDeleteTask: (title: string) => void;
  handleEditTask: (task: ITask) => void;
};

export type ModalType = {
  children: React.ReactNode;
  title: string;
  openModal: boolean;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export type HandleType = {
  updateTask: () => void;
};
