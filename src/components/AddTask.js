import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewTask } from '../tasksSlice';

export default function AddTask() {
  const [inputObj, setInputObj] = useState({ text: '', day: '', complete: false });

  const isFormVisible = useSelector((state) => state.tasks.isFormVisible);
  const dispatch = useDispatch();

  const onChangeInputField = (e) => {
    setInputObj({ ...inputObj, [e.target.name]: e.target.value });
  };

  const onSubmitForm = async (e) => {
    e.preventDefault();
    console.log('onSubmit', inputObj);
    dispatch(createNewTask(inputObj));
    setInputObj({ ...inputObj, text: '', day: '' });
  };

  const resetFormField = (e) => {
    e.preventDefault();
    setInputObj({ ...inputObj, text: '', day: '' });
  };

  return (
    <>
      <form class="add-form" style={{ display: !isFormVisible && 'none' }} onSubmit={onSubmitForm}>
        <div class="form-control">
          <label for="text">Task</label>
          <input type="text" name="text" id="text" placeholder="Add Task" value={inputObj.text} onChange={onChangeInputField} required />
        </div>
        <div class="form-control">
          <label for="day">Day & Time</label>
          <input type="text" name="day" id="day" placeholder="Add Day & Time" value={inputObj.day} onChange={onChangeInputField} />
        </div>
        <div className="form-btns-container">
          <input type="submit" value="Save Task" class="btn form-btns" style={{ backgroundColor: 'green' }} />
          <button className="btn form-btns" onClick={resetFormField}>
            Reset
          </button>
        </div>
      </form>
    </>
  );
}
