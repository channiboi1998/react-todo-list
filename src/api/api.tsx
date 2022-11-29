import axios from 'axios';
import TaskInterface from '../interfaces/TaskInterface';

const api = axios.create({
    baseURL: 'http://localhost:3000',
});

export const getTasks = async () => {
    const response = await api.get("/tasks"); 
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