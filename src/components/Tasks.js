import React, { useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AddTask from './AddTask';
import TaskItem from './TaskItem';
import { retrieveTasks, deleteAllTasksFromList } from '../tasksSlice';

function Task() {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();

  // useCallback is kind of same as "memo" react hook, only difference is it returns the whole function instead of returning the data only
  // basically it is used for prevent re rendering. for more info checkout :https://www.youtube.com/watch?v=_AyFP5s69N4
  const initFetch = useCallback(() => {
    dispatch(retrieveTasks());
  }, [dispatch]);

  useEffect(() => {
    initFetch();
  }, [initFetch]);

  const deleteAllTasks = () => {
    const taskIds = tasks.map((each) => each.id);
    dispatch(deleteAllTasksFromList(taskIds));
  };

  return (
    <>
      <AddTask />
      {console.log('tasklist abcd', tasks)}
      {tasks &&
        tasks.length > 0 &&
        tasks.map((eachItem) => {
          return <TaskItem taskItem={eachItem} />;
        })}
      <button className="btn" style={{ display: tasks && tasks.length > 0 ? 'block' : 'none', width: '100%', backgroundColor: 'grey' }} onClick={deleteAllTasks}>
        Remove All Tasks
      </button>
    </>
  );
}

export default Task;
