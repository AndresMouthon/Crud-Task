import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { MdAssignment } from 'react-icons/md';
import "../assets/Task.css";

function TaskCard({ task, capturarInformacion, deleteTask }) {
    return (
        <div className="task-card">
            <div className="icon-container">
                <MdAssignment className="task-icon" />
            </div>
            <h3 className="task-name">{task.name}</h3>
            <div className="task-actions">
                <button className="edit-button" onClick={() => capturarInformacion(task)} >
                    <FaEdit />
                </button>
                <button className="delete-button" onClick={() => deleteTask(task.id)} >
                    <FaTrash />
                </button>
            </div>
        </div>
    )
}

export default TaskCard