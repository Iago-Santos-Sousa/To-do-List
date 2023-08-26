import { TaskListType } from "../types/MyTypes";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import styles from "../assets/styles/Tolltip.module.css";

const TaskList = ({ taskList, handleDeleteTask, handleEditTask }: TaskListType) => {
  return (
    <>
      {taskList.length > 0
        ? taskList.map((task, index) => (
            <div key={index} className="tasks-container">
              <div className="details">
                <span>{task.title}</span>
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
            </div>
          ))
        : null}
    </>
  );
};

export default TaskList;
