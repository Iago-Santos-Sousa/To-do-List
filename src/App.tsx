import ListIcon from "./components/ListIcon";
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
          />
        }
      />
      <main>
        <>
          <ListIcon />
        </>
        <>
          <TaskForm
            btnText="Adicionar"
            taskList={taskList}
            setTaskList={setTaskList}
          />
        </>
        {taskList.length > 0 && (
          <TaskList
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        )}
      </main>
    </div>
  );
}

export default App;
