/* eslint-disable react/prop-types */
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

export default function AddEditForm({ onCreate, onClose, onEdit }) {
  const [task, setTask] = useState(
    onEdit || {
      id: crypto.randomUUID(),
      title: "",
      description: "",
      priority: "",
      isDone: false,
    }
  );
  // eslint-disable-next-line no-unused-vars
  const [isAdd, setIsAdd] = useState(onEdit === null);

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    setTask({ ...task, [name]: value });
  }
  function handleCreate(event) {
    event.preventDefault();
    if (task.title && task.description && task.priority) {
      onCreate(task, isAdd);
      setTask({
        id: crypto.randomUUID(),
        title: "",
        description: "",
        priority: "",
        isDone: false,
      });
      onClose();
    }
  }

  return (
    <div className={"absolute z-30 -top-2 backdrop-blur-sm h-[100%] w-[100%]"}>
      <div className=" w-[90vw] max-w-[260px] min-w-[650px] mt-5 pb-9 mx-auto relative">
        <div className="bg-[#000025] border-2 border-[#101033] shadow-sm rounded-lg shadow-slate-700 p-5">
          <h1 className="text-center mb-4 text-2xl font-semibold">
            {!isAdd ? "Edit Task" : "Add Task"}
          </h1>
          <IoMdCloseCircleOutline
            onClick={onClose}
            className="absolute right-2 top-2 text-slate-500 hover:text-red-700 cursor-pointer"
          />

          <form className="flex flex-col gap-5">
            <div className="flex justify-around gap-7 *:w-1/2 *:h-8 *:px-2 *:rounded *:bg-[#00001c] *:border *:border-[#101033]">
              <input
                type="text"
                name="title"
                placeholder="Type a title"
                value={task.title}
                onChange={handleChange}
              />
              <select
                name="priority"
                value={task.priority}
                onChange={handleChange}
              >
                <option value="">Select Priority</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
            </div>

            <textarea
              name="description"
              placeholder="Write a description"
              className="bg-[#00001c] border border-[#101033] p-2 rounded h-28"
              value={task.description}
              onChange={handleChange}
            ></textarea>

            <button
              onClick={handleCreate}
              className="bg-indigo-900 w-20 py-[2px] mx-auto rounded"
            >
              {!isAdd ? "Save" : "Create"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
