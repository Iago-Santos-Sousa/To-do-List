import { TaskListType } from "../types/MyTypes";
import { BsTrash } from "react-icons/bs";
import { BsPencil } from "react-icons/bs";

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
                <i onClick={() => handleEditTask(task)}>
                  <BsPencil />
                </i>
                <i onClick={() => handleDeleteTask(task.title)}>
                  <BsTrash />
                </i>
              </div>
            </div>
          ))
        : null}
    </>
  );
};

export default TaskList;
