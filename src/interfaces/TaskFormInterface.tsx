import { ITask } from "./Task";

export interface TaskFormType {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  taskToUpdate?: ITask | null;
  handleUpdateTask?: (id: number, title: string) => void;
}
