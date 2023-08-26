import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/modal/Modal";
import useTasksList from "./hooks/useTasksList";

function App() {
  const {
    taskList,
    setTaskList,
    taskToUpdate,
    handleDeleteTask,
    handleEditTask,
    handleUpdateTask,
    openModal,
    setOpenModal,
    errorMessage,
    setErrorMessage,
  } = useTasksList();

  return (
    <div className="App">
      <Modal
        openModal={openModal}
        setOpenModal={setOpenModal}
        children={
          <TaskForm
            btnText={"Editar"}
            taskList={taskList}
            taskToUpdate={taskToUpdate}
            handleUpdateTask={handleUpdateTask}
            errorMessage={errorMessage}
            setErrorMessage={setErrorMessage}
          />
        }
      />
      <main>
        <>
          <TaskForm btnText="Adicionar" taskList={taskList} setTaskList={setTaskList} />
        </>

        {taskList.length > 0 && (
          <div className="list-container">
            <TaskList
              taskList={taskList}
              handleDeleteTask={handleDeleteTask}
              handleEditTask={handleEditTask}
            />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
