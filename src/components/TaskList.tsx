const TaskList = ({ taskList, handleDeleteTask, handleEditTask }) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task, index) => (
          <div key={index} className="">
            <div className="details">
              <h4>{task.title}</h4>
            </div>
            <div className="actions">
              <i className="bi bi-pencil" onClick={() => handleEditTask(task)}></i>
              <i className="bi bi-trash" onClick={() => handleDeleteTask(task.title)}></i>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas</p>
      )}
    </>
  );
};

export default TaskList;
