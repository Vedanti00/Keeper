import React, { useState } from 'react';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import AddIcon from '@mui/icons-material/Add';

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: '', content: '' });
  const [isExpanded, setIsExpanded] = useState(false);

  function expand() {
    setIsExpanded(true);
  }

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    if (note.title !== '' && note.content !== '') {
      props.add(note);
      setNote({ title: '', content: '' });
    }
  }

  return (
    <div>
      <form className="create-note">
        <input
          onChange={handleChange}
          onClick={expand}
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
        />
        {isExpanded ? (
          <div>
            <textarea
              onChange={handleChange}
              name="content"
              value={note.content}
              placeholder="Take a Note..."
            ></textarea>
            <Zoom in={isExpanded}>
              <Fab name="add" onClick={submitNote}>
                <AddIcon />
              </Fab>
            </Zoom>
          </div>
        ) : null}
      </form>
    </div>
  );
};

export default CreateNote;
