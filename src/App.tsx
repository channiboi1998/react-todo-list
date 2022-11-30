import { useState } from 'react';
import './styles.css';
import Grid from '@mui/material/Grid';
import TasksList from './features/tasks/TasksList';
import ListFilters from './features/tasks/ListFilters';
import Actions from './features/tasks/Actions';
import SearchForm from './features/tasks/SearchForm';
import AddTaskForm from './features/tasks/AddTaskForm';

function App() {

    const [selectedFilter, setSelectedFilter] = useState("all");
    const [selectedForm, setSelectedForm] = useState("addTask");
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="app-container">
            <h1>Things to do</h1>
            {selectedForm === "addTask" ? <AddTaskForm /> : <SearchForm setSearchValue={setSearchValue} />}
            <TasksList searchValue={searchValue} selectedFilter={selectedFilter} />
            <Grid container>
                <Actions setSelectedForm={setSelectedForm} />
                <Grid className="grid-center" item lg={6} md={6} xs={6}></Grid>
                <ListFilters selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} />
            </Grid>
        </div>
    );
}

export default App;
