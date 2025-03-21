// src/components/Board.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, deleteTask, reorderTask } from "../redux/taskSlice";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { v4 as uuidv4 } from "uuid";

const Board = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    column: "todo",
  });

  const handleAddTask = () => {
    if (newTask.title.trim() === "" || newTask.description.trim() === "")
      return;
    dispatch(addTask({ id: uuidv4(), ...newTask }));
    setNewTask({ title: "", description: "", column: "todo" });
  };

  const handleDeleteTask = (column, id) => {
    dispatch(deleteTask({ column, id }));
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    dispatch(
      reorderTask({ source: result.source, destination: result.destination })
    );
  };

  return (
    <div className="board-container">
      <div className="task-input">
        <input
          type="text"
          placeholder="Task Title"
          value={newTask.title}
          onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Task Description"
          value={newTask.description}
          onChange={(e) =>
            setNewTask({ ...newTask, description: e.target.value })
          }
        />
        <select
          value={newTask.column}
          onChange={(e) => setNewTask({ ...newTask, column: e.target.value })}
        >
          <option value="todo">To Do</option>
          <option value="inProgress">In Progress</option>
          <option value="done">Done</option>
        </select>
        <button className="btn btn-success" onClick={handleAddTask}>
          Add Task
        </button>
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="columns">
          {Object.keys(tasks).map((column) => (
            <Droppable key={column} droppableId={column}>
              {(provided) => (
                <div
                  className="column"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h3>{column.replace(/([A-Z])/g, " $1")}</h3>
                  {tasks[column].map((task, index) => (
                    <Draggable
                      key={task.id}
                      draggableId={task.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          className="task-card"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <h4>{task.title}</h4>
                          <p>{task.description}</p>
                          <button
                            onClick={() => handleDeleteTask(column, task.id)}
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
    </div>
  );
};

export default Board;
