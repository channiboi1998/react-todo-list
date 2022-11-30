import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';

const Actions = (props: any) => {
    return (
        <Grid className="grid-center" item lg={2} md={6} xs={6}>
            <Tooltip title="Add Task">
                <IconButton onClick={() => props.setSelectedForm("addTask")}>
                    <AddIcon />
                </IconButton>
            </Tooltip>
            <Tooltip title="Search Task">
                <IconButton onClick={() => props.setSelectedForm("searchTask")}>
                    <SearchIcon />
                </IconButton>
            </Tooltip>
        </Grid>
    )
}

export default Actions