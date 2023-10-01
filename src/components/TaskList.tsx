import { TaskListType } from "../types/MyTypes";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";
import styles from "../assets/styles/Tolltip.module.css";
import checkoboxIcon from "../assets/images/checkoboxIcon.svg";
import unchecked from "../assets/images/unchecked.svg";
import { useState, useEffect } from "react";

const TaskList = ({
  taskList,
  handleDeleteTask,
  handleEditTask,
}: TaskListType) => {
  const [selectedTask, setSelectedTasks] = useState<number[]>([]);
  console.log(selectedTask);

  /*
    **Evitar erro de tipagem do localStorage no useEffect abaixo:
    1.Primeiro, armazenamos o resultado do localStorage.getItem("selectedTask") em savedSelectedItemsString, que é explicitamente do tipo string | null.

    2.Em seguida, usamos um operador ternário para verificar se savedSelectedItemsString é nulo. Se não for nulo, fazemos o JSON.parse, caso contrário, atribuímos um array vazio.

    3.Por fim, atribuímos savedSelectedItems a setSelectedTasks, garantindo que o tipo seja compatível.
    
    Isso deve resolver o erro e lidar com o possível valor nulo retornado pelo localStorage.
    */
  useEffect(() => {
    const savedSelectedItemsString: string | null =
      localStorage.getItem("selectedTask");
    const savedSelectedItems: number[] = savedSelectedItemsString
      ? JSON.parse(savedSelectedItemsString)
      : [];
    console.log(savedSelectedItems);
    setSelectedTasks(savedSelectedItems);
  }, []);

  const toggleSelectedTask = (taskId: number): void => {
    // Alternar checkbox da tarefa e incluir no localStorage
    const updatedSelectedItems: number[] = selectedTask.includes(taskId)
      ? selectedTask.filter((id) => id !== taskId)
      : [...selectedTask, taskId];

    setSelectedTasks(updatedSelectedItems);
    localStorage.setItem("selectedTask", JSON.stringify(updatedSelectedItems));
  };

  return (
    <div className="list-container">
      {taskList.length > 0
        ? taskList.map((task, index) => (
            <div
              key={index}
              className={`tasks-container`}
              style={{
                textDecoration: selectedTask.includes(task.id)
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
              <span
                className="checkbox"
                onClick={() => toggleSelectedTask(task.id)}
              >
                <img
                  src={`${
                    selectedTask.includes(task.id) ? checkoboxIcon : unchecked
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
