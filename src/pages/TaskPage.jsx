import React from "react";
import FormTask from "../components/FormTask";
import useTask from "../hooks/useTask";
import ViewTasks from "../components/ViewTasks";
import NoTask from "../components/NoTask";

function TaskPage() {

    const {
        tasks, task,
        handleChange, addTask, capturarInformacion, updateTask, deleteTask,
    } = useTask();

    const handleSubmit = task.id ? updateTask : addTask;

    return (
        <>
            <FormTask handleChange={handleChange} handleSubmit={handleSubmit} task={task} />
            {
                tasks.length > 0 ?
                    <ViewTasks tasks={tasks} capturarInformacion={capturarInformacion} deleteTask={deleteTask} />
                    :
                    <NoTask />
            }
        </>
    )
};

export default TaskPage;