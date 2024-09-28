import React from "react";
import "../assets/Task.css";
import TaskCard from "./TaskCard";

function ViewTasks({ tasks, capturarInformacion, deleteTask }) {
    return (
        <div className="task-grid">
            {tasks.map((task, index) => (
                <TaskCard
                    key={index}
                    task={task}
                    deleteTask={deleteTask}
                    capturarInformacion={capturarInformacion}
                />
            ))}
        </div>
    )
};

export default ViewTasks;