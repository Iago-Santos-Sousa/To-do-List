import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";
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
        title="Editar tarefa"
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
        <div className="form-container">
          <h1>Adicione a sua tarefa</h1>
          <TaskForm btnText="Cadastrar" taskList={taskList} setTaskList={setTaskList} />
        </div>

        <div className="list-container">
          <h2>Suas tarefas:</h2>
          <TaskList
            taskList={taskList}
            handleDeleteTask={handleDeleteTask}
            handleEditTask={handleEditTask}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
