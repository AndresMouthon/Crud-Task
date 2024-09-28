import { useState } from "react";
import Swal from "sweetalert2";

function useTask() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState({
        id: "",
        name: "",
    });

    const recargar = () => {
        setTask({ id: "", name: "" });
    };

    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        });
    };

    const addTask = () => {
        if (task.name === "") {
            Swal.fire({
                title: 'Falta informacion',
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false,
            })
        } else {
            const newTask = {
                id: tasks.length + 1,
                name: task.name,
            };
            setTasks([...tasks, newTask]);
            recargar();
        };
    };

    const capturarInformacion = (task = {}) => {
        setTask(task);
    };

    const updateTask = () => {
        const { id, name } = task;
        if (name === "") {
            Swal.fire({
                title: 'Falta informacion',
                icon: 'warning',
                timer: 2000,
                showConfirmButton: false,
            })
        } else {
            setTasks(tasks.map(taskUpdate => (taskUpdate.id === id ? { ...taskUpdate, name } : taskUpdate)));
            recargar();
        };
    };

    const deleteTask = (id) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar esta tarea?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Sí, eliminar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                setTasks(tasks.filter(task => task.id !== id));
                Swal.fire({
                    title: 'Tarea eliminada',
                    icon: 'success',
                    timer: 2000,
                    showConfirmButton: false,
                });
            }
        });
    };

    return {
        tasks,
        task,
        handleChange,
        addTask,
        capturarInformacion,
        updateTask,
        deleteTask,
    };
};

export default useTask;