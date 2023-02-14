import React from 'react';

const Note = (props) => {
  function _delete(event) {
    event.preventDefault();
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={_delete}>Delete</button>
    </div>
  );
};

export default Note;
