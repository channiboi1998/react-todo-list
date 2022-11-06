import React from 'react';
import FormGroup from '@mui/material/FormGroup';
import Task from './Task';

const TasksList = (props:any) => {

    const taskStatusChange = (id:number, status:any) => {
        props.handleTaskStatusChange(id, status);
    }

    return (
        <>
            <FormGroup className="division">
                {props.tasks.map((task:any) => {
                    return (
                        <Task key={task.id} taskStatusChange={taskStatusChange} task={task} />
                    )
                })}
            </FormGroup>
        </>
    )
}

export default TasksList