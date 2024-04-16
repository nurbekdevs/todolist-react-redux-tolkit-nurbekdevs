import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loadTask, addTask, updateTask, deleteTask, deleteAllTasks } from './api/apiCalls';

const initialState = {
  isFormVisible: false,
  tasks: []
};

export const createNewTask = createAsyncThunk('tasks/create', async (taskDetails) => {
  console.log('i am here inside createNewTask');
  const res = await addTask(taskDetails);
  return res.data;
});

export const retrieveTasks = createAsyncThunk('tasks/retrieve', async () => {
  console.log('i am here inside retrieveTasks');
  const res = await loadTask();

  return res.data;
});

export const updateTaskStatus = createAsyncThunk('tasks/update', async (taskDetails) => {
  console.log('i am here inside updateTaskStatus');
  const res = await updateTask(taskDetails.id, taskDetails);
  return res.data;
});

export const deleteOneTask = createAsyncThunk('tasks/delete', async (taskId) => {
  const res = await deleteTask(taskId);
  return { id: taskId };
});

export const deleteAllTasksFromList = createAsyncThunk('tasks/deleteAll', async (taskIds) => {
  const res = await deleteAllTasks(taskIds);
  return res.data;
});

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    formVisibility: (state) => {
      state.isFormVisible = !state.isFormVisible;
    }
  },

  extraReducers: {
    [createNewTask.fulfilled]: (state, action) => {
      state.tasks.push(action.payload);
    },
    [retrieveTasks.fulfilled]: (state, action) => {
      return { ...state, tasks: [...action.payload] };
    },
    [updateTaskStatus.fulfilled]: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload.id);
      state.tasks[index].complete = action.payload.complete;
    },
    [deleteOneTask.fulfilled]: (state, action) => {
      console.log('state and action', action);
      let index = state.tasks.findIndex(({ id }) => id === action.payload.id);
      console.log();
      state.tasks.splice(index, 1);
    },
    [deleteAllTasksFromList.fulfilled]: (state) => {
      state.tasks = [];
    }
  }
});

export const { formVisibility } = tasksSlice.actions;
const { reducer } = tasksSlice;
export default reducer;
