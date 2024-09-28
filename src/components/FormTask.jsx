import React from "react";
import { AiOutlineEdit } from 'react-icons/ai';
import { FaEdit, FaPlus } from 'react-icons/fa';
import "../assets/Task.css";

function FormTask({ handleChange, handleSubmit, task }) {
    return (
        <center>
            <section className="task-input">
                <div className="input-container">
                    <AiOutlineEdit className="input-icon" />
                    <input
                        type="text"
                        name="name"
                        value={task.name}
                        onChange={handleChange}
                        placeholder="Añadir nueva tarea..."
                        className="input-field"
                    />
                </div>
                {
                    task.id ?
                        <button type="submit" className="guardar-button" onClick={handleSubmit}>
                            <FaEdit />
                        </button>
                        :
                        <button type="submit" className="guardar-button" onClick={handleSubmit}>
                            <FaPlus />
                        </button>
                }
            </section>
        </center>
    )
};

export default FormTask;