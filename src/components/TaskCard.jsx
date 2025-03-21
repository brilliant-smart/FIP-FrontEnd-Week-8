import React from "react";
import { Paper, Typography } from "@mui/material";
import { Draggable } from "@hello-pangea/dnd";

const TaskCard = ({ task, index }) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Paper
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className="mb-3 p-2 shadow-sm"
          style={{
            backgroundColor: "white",
            ...provided.draggableProps.style,
          }}
        >
          <Typography>{task.title}</Typography>
        </Paper>
      )}
    </Draggable>
  );
};

export default TaskCard;
