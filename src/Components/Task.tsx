import React, { useState } from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Task = (props: any) => {

    const task = props.task;

    const [status, setStatus] = useState(props.task.status);

    const taskStatusChange = (id:number, event:any) => {
        props.taskStatusChange(id, event.target.checked);
        setStatus(event.target.checked);
    }

    return (
        <FormControlLabel
            key={task.id}
            control={<Checkbox checked={status} onChange={(event) => taskStatusChange(task.id, event)} />}
            label={task.label} />
    )
}

export default Task