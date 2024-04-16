import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import { updateTaskStatus, deleteOneTask } from '../tasksSlice';

export default function TaskItem(props) {
  const { taskItem } = props;
  const dispatch = useDispatch();

  const onClick = () => {
    console.log('inside onClick for delete task', taskItem.id);
    dispatch(deleteOneTask(taskItem.id));
  };

  const onDoubleClick = () => {
    const updatedTask = { ...taskItem, complete: !taskItem.complete };
    dispatch(updateTaskStatus(updatedTask));
  };

  return (
    <>
      <div className={`task ${taskItem.complete ? 'task-reminder' : ''}`} onDoubleClick={onDoubleClick}>
        <h3>
          {taskItem.text} <FontAwesomeIcon icon={faXmarkCircle} style={{ color: 'red' }} onClick={onClick} />
        </h3>

        <p>{taskItem.day}</p>
      </div>
    </>
  );
}
