import Axios from "axios";

const httpOptions = {
  headers: { "Content-Type": "application/json" },
};

export const addTask = (taskDetails) => {
  const stringIfyTask = JSON.stringify(taskDetails);
  return Axios.post(`http://localhost:5000/tasks/`, stringIfyTask, httpOptions);
};

export const updateTask = (taskId, taskDetails) => {
  const stringIfyTask = JSON.stringify(taskDetails);
  return Axios.put(
    `http://localhost:5000/tasks/${taskId}`,
    stringIfyTask,
    httpOptions
  );
};

export const deleteTask = (taskId) => {
  return Axios.delete(`http://localhost:5000/tasks/${taskId}`);
};

export const deleteAllTasks = (taskIds) => {
  return Promise.all(
    taskIds.map((eachTaskId) => {
      return deleteTask(eachTaskId);
    })
  );
};

export const loadTask = () => {
  return Axios.get(`http://localhost:5000/tasks/`);
};
