import { useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Grid';
import TasksList from './features/tasks/TasksList';
import ListFilters from './features/tasks/ListFilters';
import Actions from './features/tasks/Actions';
import SearchForm from './features/tasks/SearchForm';
import AddTaskForm from './features/tasks/AddTaskForm';

function App() {

    const [selectedForm, setSelectedForm] = useState("addTask");

    const handleChangeForm = (form: string) => {
        setSelectedForm(form);
    }

    return (
        <div className="app-container">
            <h1>Things to do</h1>
            {selectedForm === "addTask" ? <AddTaskForm /> : <SearchForm />}
            <TasksList />
            <Grid container>
                <Actions changeForm={handleChangeForm} />
                <Grid className="grid-center" item lg={6} md={6} xs={6}>
                     1 items done, 0 items left
                </Grid>
                <ListFilters />
            </Grid>
        </div>
    );
}

export default App;
