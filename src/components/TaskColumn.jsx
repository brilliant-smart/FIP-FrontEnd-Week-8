import React from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { Droppable } from "@hello-pangea/dnd";
import TaskCard from "./TaskCard";
import { useSelector } from "react-redux";

const TaskColumn = ({ title }) => {
  const tasks = useSelector((state) =>
    state.tasks.tasks.filter((task) => task.status === title)
  );

  return (
    <Droppable droppableId={title}>
      {(provided) => (
        <Grid item xs={12} sm={6} md={4} lg={3} className="p-2">
          <Paper
            elevation={3}
            ref={provided.innerRef}
            {...provided.droppableProps}
            className="p-3"
            style={{ minHeight: 300 }}
          >
            <Typography variant="h6" className="text-center">
              {title}
            </Typography>
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </Paper>
        </Grid>
      )}
    </Droppable>
  );
};

export default TaskColumn;
