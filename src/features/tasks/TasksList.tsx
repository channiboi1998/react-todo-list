import FormGroup from '@mui/material/FormGroup';
import Task from './Task';
import { useQuery } from 'react-query';
import { getTasks } from '../../api/api';
import TaskInterface from '../../interfaces/TaskInterface';

const TasksList = (props: any) => {

    const filters = {
        selectedFilter: props.selectedFilter,
        searchValue: props.searchValue,
    }

    const {
        isLoading,
        isSuccess,
        isError,
        error,
        data: tasks
    } = useQuery(['tasks', filters], () => getTasks(filters));

    let content;

    if (isLoading) {
        content = "content is loading";
    } else if(isSuccess) {
        content = "test";
        content = tasks.data.map((task: TaskInterface) => {
            return (
                <Task 
                    key={task.id} 
                    task={task}
                ></Task>
            )
        })
    } else if(isError) {
        console.log(error);
        content = "There has been an error";
    }

    return (
        <FormGroup className="division">
            {content}
        </FormGroup>
    )
}

export default TasksList