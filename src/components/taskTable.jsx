import { useState } from "react";
import { FaCheckCircle, FaRegCheckCircle, FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import AddEditForm from "./addEditForm.jsx";
import Buttons from "./buttons.jsx";

export default function TaskTable() {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [willEdit, setWillEdit] = useState(null);
  function handleWillEdit(task) {
    setIsFormOpen(true);
    setWillEdit(task);
  }
  //New Task Create
  function handleCreateNew(newTask, isAdd) {
    if (!isAdd) {
      const taskId = newTask.id;
      const editedTasks = tasks.map((task) => {
        if (task.id === taskId) {
          return newTask;
        } else {
          return task;
        }
      });
      setTasks(editedTasks);
    } else {
      setTasks([...tasks, newTask]);
    }
  }

  //Done or not
  function handleDone(task) {
    const taskId = task.id;
    let editedTask = task;
    editedTask.isDone = !task.isDone;
    const taskList = tasks.map((taskF) => {
      if (taskF.id === taskId) {
        return editedTask;
      }
      return taskF;
    });
    setTasks(taskList);
  }
  //Form Open or Not
  function handleForm() {
    setIsFormOpen(!isFormOpen);
    setWillEdit(null);
  }
  //Remove Function
  function handleRemove(taskId) {
    const newTasks = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(newTasks);
  }
  //Remove All
  function handleRemoveAll() {
    setTasks([]);
  }

  return (
    <>
      <div className="relative">
        <Buttons onAdd={handleForm} onRemoveAll={handleRemoveAll} />
        <section>
          <div className="bg-[#000025] border-2 mt-5 border-[#101033] rounded-lg">
            {tasks.length > 0 ? (
              <table className="mx-4 my-4 w-[96%] ">
                <thead>
                  <tr className="border-b-2 border-[#101033] text-lg *:pb-2">
                    <th className="min-w-[70px]">Mark</th>
                    <th className="w-[200px]">Title</th>
                    <th className="px-10">Description</th>
                    <th className="min-w-[140px]">Priority</th>
                    <th className="min-w-[70px]">Actions</th>
                  </tr>
                </thead>
                <tbody className="text-base">
                  {tasks.map((taskM) => (
                    <tr
                      key={taskM.id}
                      className={`border-t odd:bg-[#000029] even:bg-[#000027] border-[#101033] *:py-2 ${
                        taskM.isDone ? "text-slate-500" : ""
                      }`}
                    >
                      <td>
                        <button
                          onClick={() => handleDone(taskM)}
                          className="ml-5"
                        >
                          {taskM.isDone ? (
                            <FaCheckCircle className="text-green-500" />
                          ) : (
                            <FaRegCheckCircle className="text-slate-700" />
                          )}
                        </button>
                      </td>
                      <td className="text-center  break-words whitespace-normal">
                        {taskM.title}
                      </td>
                      <td className="break-words whitespace-normal">
                        {taskM.description}
                      </td>
                      <td className="text-center break-words whitespace-normal">
                        {taskM.priority}
                      </td>
                      <td>
                        <div className="flex flex-row justify-center gap-2">
                          <div className="relative">
                            <FaRegEdit
                              onClick={() => handleWillEdit(taskM)}
                              className="size-5 peer cursor-pointer"
                            />

                            <div className="absolute hidden peer-hover:block -top-6 -left-2">
                              <button className="text-xs text-neutral-400 px-1 py-[2px] rounded-sm border border-neutral-700 bg-indigo-950">
                                Edit
                              </button>
                            </div>
                          </div>
                          <div className="relative">
                            <MdDelete
                              onClick={() => handleRemove(taskM.id)}
                              className="size-5 peer cursor-pointer"
                            />

                            <div className="absolute hidden peer-hover:block -top-6 -left-4">
                              <span className="text-xs text-neutral-400 px-1 py-[2px] rounded-sm border border-neutral-700 bg-indigo-950">
                                Remove
                              </span>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-10">
                <h1 className="text-center text-2xl font-bold font-sans">
                  No Task Found
                </h1>
              </div>
            )}
          </div>
        </section>
        {isFormOpen && (
          <div>
            <AddEditForm
              onEdit={willEdit}
              onClose={handleForm}
              onCreate={handleCreateNew}
            />
          </div>
        )}
      </div>
    </>
  );
}
