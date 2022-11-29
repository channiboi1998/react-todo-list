import { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import { useMutation, useQueryClient } from 'react-query';
import { addTask } from '../../api/api';

const AddTaskForm = () => {
    
    const [task, setTask] = useState("");
   
    const queryClient = useQueryClient();

    const addTaskMutation = useMutation(addTask, {
        onSuccess: () => {
            queryClient.invalidateQueries('tasks');
        }
    });

    const handleSubmit = (newTask: string) => {
        if (newTask === "") { return; }
        addTaskMutation.mutate({
            title: newTask,
            completed: false
        })
        setTask("");
    }

    return (
        <Grid container spacing={2}>
            <Grid item lg={9} md={12} xs={12}>
                <TextField 
                    label="Add a new task" 
                    variant="standard" 
                    fullWidth
                    value={task}
                    onChange={(e) => setTask(e.currentTarget.value)}
                />
            </Grid>
            <Grid item lg={3} md={12} xs={12}>
                <Button 
                    variant="contained" 
                    fullWidth 
                    className="fullHeight" 
                    endIcon={<AddIcon />}
                    onClick={() => handleSubmit(task)} 
                >Add Task</Button>
            </Grid>
        </Grid>
    )
}

export default AddTaskForm