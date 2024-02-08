import React from 'react';
import CloseButton from 'react-bootstrap/CloseButton';

export default function TaskItem({ label, text, deleteTask, completeTask, complete }) {
  const modText = text
    .trim()
    .split(' ')
    .map(word => {
      return word[0].toUpperCase() + word.substring(1).toLowerCase();
    })
    .join(' ');

  return (
    <>
      <CloseButton onClick={deleteTask} />
      <input
        type="checkbox"
        style={{ marginRight: 20, marginLeft: 20 }}
        id={label}
        onChange={completeTask}
        checked={complete ? true : false}
      />
      <label htmlFor={label} style={{ textDecoration: `${complete ? 'line-through' : 'none'}` }}>
        {modText}
      </label>
    </>
  );
}
