import { useMutation, useQueryClient } from 'react-query';
import { updateTaskStatus, deleteTask } from '../../api/api';
import DeleteIcon from '@mui/icons-material/Delete';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

const Task = (props: any) => {

    const queryClient = useQueryClient();

    const updateTaskStatusMutation = useMutation(updateTaskStatus, {
        onSuccess: () => {
            queryClient.invalidateQueries("tasks");
        }
    });

    const handleTaskStatusChange = () => {
        let tempTask = { ...props.task, completed: !props.task.completed };
        updateTaskStatusMutation.mutate(tempTask);
    }

    const deleteTaskMutation = useMutation(deleteTask, {
        onSuccess: () => {
            queryClient.invalidateQueries("tasks");
        }
    });

    return (
        <ListItem
            secondaryAction={
                <IconButton edge="end" onClick={() => deleteTaskMutation.mutate(props.task)}>
                    <DeleteIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onChange={() => handleTaskStatusChange()} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={props.task.completed === true ? true : false}
                        tabIndex={-1}
                        disableRipple
                    />
                </ListItemIcon>
                <ListItemText primary={props.task.title} />
            </ListItemButton>
        </ListItem>
    )
}

export default Task