import React from "react";
import { MdError } from "react-icons/md";

function NoTask() {
    return (
        <div className="task-card">
            <div className="icon-error">
                <MdError className="task-icon" />
            </div>
            <h3 className="task-name">Sin tareas</h3>
            <div className="task-actions">
                No se a registrado ninguna tarea
            </div>
        </div>
    )
};

export default NoTask;