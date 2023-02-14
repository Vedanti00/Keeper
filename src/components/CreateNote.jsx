import React, { useState } from 'react';

const CreateNote = (props) => {
  const [note, setNote] = useState({ title: '', content: '' });

  function handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;

    setNote((prevNote) => {
      return { ...prevNote, [name]: value };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.add(note);
    setNote({ title: '', content: '' });
  }

  return (
    <div>
      <form>
        <input
          onChange={handleChange}
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content}
          placeholder="Take a Note..."
        ></textarea>
        <button
          name="add"
          onClick={submitNote}
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
