import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

const AddTaskForm = (props: any) => {

    const [inputValue, setInputValue] = useState("");

    const inputValueOnChange = (event: any) => {
        setInputValue(event.target.value);
    }

    const AddTaskFormSubmit = (event: any) => {
        if (inputValue) {
            props.handleAddFormSubmit(inputValue);
            setInputValue("");
        } else {
            alert("The field is required");
        }
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item lg={9} md={12} xs={12}>
                    <TextField label="Add a new task" value={inputValue} onChange={(event) => inputValueOnChange(event)} variant="standard" fullWidth />
                </Grid>
                <Grid item lg={3} md={12} xs={12}>
                    <Button variant="contained" fullWidth className="fullHeight" endIcon={<AddIcon />} onClick={(event) => AddTaskFormSubmit(event)}>Add Task</Button>
                </Grid>
            </Grid>
        </>
    )
}

export default AddTaskForm