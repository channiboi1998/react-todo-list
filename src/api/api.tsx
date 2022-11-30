import axios from 'axios';
import TaskInterface from '../interfaces/TaskInterface';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getTasks = async (filters: { selectedFilter: string, searchValue: string }) => {
    let getUrl = "/tasks?";
    if (filters.selectedFilter === "active") {
        getUrl = "/tasks?completed=false";
    } else if (filters.selectedFilter === "completed") {
        getUrl = "/tasks?completed=true";
    }
    const response = await api.get(getUrl + "&q=" + filters.searchValue);
    return response;
}

export const addTask = async (task: TaskInterface) => {
    const response = await api.post("/tasks", task);
    return response;
}

export const updateTaskStatus = async (task: TaskInterface) => {
    const response = await api.put("/tasks/" + task.id, task);
    return response;
}

export const deleteTask = async (task: TaskInterface) => {
    const response = await api.delete("/tasks/" + task.id);
}