import React from 'react';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Actions = (props: any) => {

    const handleActionClick = (selectedAction: any) => {
        props.handleFormChange(selectedAction);
    }

    return (
        <>
            <Grid className="grid-center" item lg={2} md={6} xs={6}>
                <Tooltip title="Add Task">
                    <IconButton onClick={() => handleActionClick("add_task")} >
                        <AddIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Search Task">
                    <IconButton onClick={() => handleActionClick("search_task")} >
                        <SearchIcon />
                    </IconButton>
                </Tooltip>
            </Grid>
        </>
    )
}

export default Actions