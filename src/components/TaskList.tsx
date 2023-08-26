import { TaskListType } from "../types/MyTypes";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import styles from "../assets/styles/Tolltip.module.css";
import checkoboxIcon from "../assets/images/checkoboxIcon.svg";
import unchecked from "../assets/images/unchecked.svg";
import { useState, useEffect } from "react";
import { ITask } from "../interfaces/Task";

const TaskList = ({
  taskList,
  handleDeleteTask,
  handleEditTask,
}: TaskListType) => {
  const [selectedItems, setSelectedItems] = useState<ITask[]>([]);
  console.log(selectedItems);

  const toggleItemSelection = (task: ITask): void => {
    if (selectedItems.includes(task)) {
      setSelectedItems(selectedItems.filter((selected) => selected !== task));
    } else {
      setSelectedItems([...selectedItems, task]);
    }
  };

  return (
    <div className="list-container">
      {taskList.length > 0
        ? taskList.map((task, index) => (
            <div
              key={index}
              onClick={() => {
                toggleItemSelection(task);
              }}
              className={`tasks-container`}
              style={{
                textDecoration: selectedItems.includes(task)
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
                    selectedItems.includes(task) ? checkoboxIcon : unchecked
                  }`}
                  alt=""
                />
              </span>
            </div>
          ))
        : null}
    </div>
  );
};

export default TaskList;
