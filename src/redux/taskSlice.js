// src/redux/taskSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: {
        todo: [{ id: "1", title: "Task 1", description: "This is task 1" }],
        inProgress: [{ id: "2", title: "Task 2", description: "This is task 2" }],
        done: [{ id: "3", title: "Task 3", description: "This is task 3" }],
    },
};

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action) => {
            const { id, title, description, column } = action.payload;
            state.tasks[column].push({ id, title, description });
        },
        deleteTask: (state, action) => {
            const { column, id } = action.payload;
            state.tasks[column] = state.tasks[column].filter((task) => task.id !== id);
        },
        reorderTask: (state, action) => {
            const { source, destination } = action.payload;
            const movedTask = state.tasks[source.droppableId].splice(source.index, 1)[0];
            state.tasks[destination.droppableId].splice(destination.index, 0, movedTask);
        },
    },
});

export const { addTask, deleteTask, reorderTask } = taskSlice.actions;
export default taskSlice.reducer;
