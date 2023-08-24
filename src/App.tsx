import { useState } from "react";
import { ITask } from "./interfaces/Task";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Modal from "./components/Modal";

function App() {
  // const [taskList, setTaskList] = useState<ITask[]>([]);
  const [taskList, setTaskList] = useState<ITask[]>(() => {
    const storedTask = localStorage.getItem("tasks-list");
    if (!storedTask) return [];
    return JSON.parse(storedTask);
  });

  const [taskToUpdate, setTaskToUpdate] = useState<ITask | null>(null);
  console.log("lista com a tarefas", taskList);
  console.log("lista com a tarefas atualizadas", taskToUpdate);

  const handleDeleteTask = (title: string): void => {
    setTaskList((prev) => {
      const newState = prev.filter((task) => task.title !== title);
      localStorage.setItem("tasks-list", JSON.stringify(newState));
      return newState;
    });
    // setTaskList(
    //   taskList.filter((task) => {
    //     return task.title !== title;
    //   }),
    // );
  };

  const hideOrShowModal = (display: boolean) => {
    // Mostra o Modal
    const modal = document.getElementById("modal");
    if (display) {
      modal!.classList.remove("hide");
    } else {
      modal!.classList.add("hide");
    }
  };

  const handleEditTask = (task: ITask): void => {
    // abre o modal e edita a tarefa específica da lista
    hideOrShowModal(true);
    setTaskToUpdate(task);
  };

  const handleUpdateTask = (id: number, title: string) => {
    // Edita a tarefa específica da lista com base no id

    // cria um objeto com a tarefa específica a ser atualizada
    const updatedTask: ITask = { id, title };

    const updatedItems = taskList.map((task) => (task.id === updatedTask.id ? updatedTask : task));

    // setTaskList(updatedItems);
    setTaskList(() => {
      localStorage.setItem("tasks-list", JSON.stringify(updatedItems));
      return updatedItems;
    });

    hideOrShowModal(false);
  };

  return (
    <div>
      <Modal
        title="Editar tarefa"
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
        <div>
          <h1>Adicione a sua tarefa</h1>
          <TaskForm btnText="Cadastrar" taskList={taskList} setTaskList={setTaskList} />
        </div>

        <div className="todo-container">
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
