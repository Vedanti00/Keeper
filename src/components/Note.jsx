import React from 'react';
import Fab from '@mui/material/Fab';
import DeleteIcon from '@mui/icons-material/Delete';

const Note = (props) => {
  function _delete(event) {
    event.preventDefault();
    props.delete(props.id);
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <Fab onClick={_delete}>
        <DeleteIcon />
      </Fab>
    </div>
  );
};

export default Note;
