import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { formVisibility } from '../tasksSlice';

export default function Button() {
  const isFormVisible = useSelector((state) => state.tasks.isFormVisible);
  const dispatch = useDispatch();

  const onClick = (e) => {
    dispatch(formVisibility());
  };
  return (
    <button style={{ backgroundColor: isFormVisible ? 'Red' : 'Green' }} className="btn" onClick={onClick}>
      {isFormVisible ? 'Close' : 'Add'}
    </button>
  );
}
