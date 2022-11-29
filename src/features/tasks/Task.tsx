import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { useMutation, useQueryClient } from 'react-query';
import { updateTaskStatus } from '../../api/api';

const Task = (props: any) => {

    const queryClient = useQueryClient();

    const updateTaskStatusMutation = useMutation(updateTaskStatus, {
        onSuccess: () => {
            queryClient.invalidateQueries("tasks")
        }
    });

    const handleTaskStatusChange = () => {
        let tempTask = {...props.task, completed:!props.task.completed};
        updateTaskStatusMutation.mutate(tempTask);
    }

    return (
        <FormControlLabel 
            control={<Checkbox 
                        checked={props.task.completed === true ? true : false}
                        onChange={() => handleTaskStatusChange()}
                    />} 
            label={props.task.title} 
        />
    )
}

export default Task