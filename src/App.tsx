import React, { useState, useEffect } from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import TasksList from './Components/TasksList';
import ListFilters from './Components/ListFilters';
import Actions from './Components/Actions';
import AddTaskForm from './Components/AddTaskForm';
import SearchForm from './Components/SearchForm';

function App() {

    /***
     * Declaration of states: Form, Filter, Tasks, SelectedTasks, Search Value
     */
    const [form, setForm] = useState("add_task");
    const [filter, setFilter] = useState("all");
    const [selectedTasks, setSelectedTasks] = useState([]);
    const [tasks, setTasks]: any = useState([
        {
            id: 1,
            label: "This is my first task",
            status: true
        },
        {
            id: 2,
            label: "This is my second task",
            status: false
        },
        {
            id: 3,
            label: "This is my third task",
            status: false
        },
    ]);
    const [listDetails, setListDetails] = useState({
        active: 0,
        completed: 0,
    });
    const [searchValue, setSearchValue] = useState("");

    /***
     * A function responsible for setting the filter [either `all`, `active`, or `completed`] based on what the user choosed
     */
    const handleFilterChange = (selectedFilter: any) => {
        setFilter(selectedFilter);
    }

    /***
     * Function that handles when the user changed the form
     */
    const handleFormChange = (selectedForm: any) => {
        setForm(selectedForm);
        setSearchValue("");
    }

    /***
     * Function responsible for adding a new task on the app
     */
    const handleAddFormSubmit = (taskLabel:string) => {
        let newTask = {
            id: tasks.length + 1,
            label: taskLabel,
            status: false
        };
        setTasks((currentTasks: any) => {
            return [...currentTasks, newTask];
        })
    }

    /***
     * A function that detect whe nthe task status is changed by the user
     */
    const handleTaskStatusChange = (id: number, status: boolean) => {
        setTasks((currentTasks: any[]) => currentTasks.map(task => {
            if (task.id === id) {
                return {...task, status: status}
            }
            return task;
        }));
    }

    /***
     * Function that sets the search input value into a state when the user searches something
     */
    const handleSearchFormSubmit = (value:string) => {
        setSearchValue(value);
    }

    /***
     * useEffect hook for detecting when the `tasks` state changes, updates the task list details
     */
    useEffect(() => {
        let activeTasksCount = 0;
        let completedTasksCount = 0;
        tasks.map((task:any) => {
            if (task.status === false) {
                activeTasksCount++;
            } else if (task.status === true) {
                completedTasksCount++;
            }
            return task;
        });
        setListDetails(currentListDetails => {
            return {...currentListDetails, active: activeTasksCount, completed: completedTasksCount}
        });
    }, [tasks]);

    /***
     * useEffect hook for detecting when either the `filter`, `tasks`, and `searchValue` states updates, update the `selectedTasks` based on the conditions set by the user
     */
    useEffect(() => {
        let temporaryTasksList: any = [];
        if (filter === "active") {
            tasks.map((task:any) => {
                if (task.status === false) {
                    temporaryTasksList.push(task);
                }
                return task;
            });
            return setSelectedTasks(temporaryTasksList.filter((task: any) => task.label.includes(searchValue)));
        } else if (filter === "completed") {
            tasks.map((task: any) => {
                if (task.status === true) {
                    temporaryTasksList.push(task);
                }
                return task;
            })
            return setSelectedTasks(temporaryTasksList.filter((task: any) => task.label.includes(searchValue)));
        }
        return setSelectedTasks(tasks.filter((task: any) => task.label.includes(searchValue)));
    }, [filter, tasks, searchValue]);

    return (
        <div className="app-container">
            <h1>Things to do</h1>
            {form === "search_task" ? <SearchForm handleSearchFormSubmit={handleSearchFormSubmit} /> : <AddTaskForm handleAddFormSubmit={handleAddFormSubmit}/>}
            <TasksList handleTaskStatusChange={handleTaskStatusChange} tasks={selectedTasks} />
            <Grid container>
                <Actions handleFormChange={handleFormChange} />
                <Grid className="grid-center" item lg={6} md={6} xs={6}>
                    {listDetails.completed} items done, {listDetails.active} items left
                </Grid>
                <ListFilters selectedFilter={filter} handleFilterChange={handleFilterChange} />
            </Grid>
        </div>
    );
}

export default App;
