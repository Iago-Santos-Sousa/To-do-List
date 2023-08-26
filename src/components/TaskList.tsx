import { TaskListType } from "../types/MyTypes";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import styles from "../assets/styles/Tolltip.module.css";
import checkoboxIcon from "../assets/images/checkoboxIcon.svg";
import unchecked from "../assets/images/unchecked.svg";
import { useState } from "react";
import { ITask } from "../interfaces/Task";

const TaskList = ({
  taskList,
  handleDeleteTask,
  handleEditTask,
}: TaskListType) => {
  const [selectedTask, setSelectedItems] = useState<ITask[]>([]);
  console.log(selectedTask);

  const toogleCheckboxIcon = (task: ITask): void => {
    if (selectedTask.includes(task)) {
      setSelectedItems(selectedTask.filter((selected) => selected !== task));
    } else {
      setSelectedItems([...selectedTask, task]);
    }
  };

  return (
    <div className="list-container">
      {taskList.length > 0
        ? taskList.map((task, index) => (
            <div
              key={index}
              onClick={() => {
                toogleCheckboxIcon(task);
              }}
              className={`tasks-container`}
              style={{
                textDecoration: selectedTask.includes(task)
                  ? "line-through"
                  : "none",
              }}
            >
              <div className="details">
                <span className="">{task.title}</span>
              </div>
              <div className="actions">
                <span className={styles.tooltip}>
                  <i onClick={() => handleEditTask(task)}>
                    <span className={styles.tooltiptext}>Editar</span>
                    <BsPencil />
                  </i>
                </span>
                <span className={styles.tooltip}>
                  <i onClick={() => handleDeleteTask(task.id)}>
                    <span className={styles.tooltiptext}>Excluir</span>
                    <BsTrash />
                  </i>
                </span>
              </div>
              <span className="checkbox">
                <img
                  src={`${
                    selectedTask.includes(task) ? checkoboxIcon : unchecked
                  }`}
                  alt="checkbox-icon"
                />
              </span>
            </div>
          ))
        : null}
    </div>
  );
};

export default TaskList;
