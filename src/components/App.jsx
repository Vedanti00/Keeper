import React, { useState } from 'react';
import CreateNote from './CreateNote';
import Footer from './Footer';
import Header from './Header';
import Note from './Note';

const App = () => {
  const [notes, setNotes] = useState([]);

  function handleAdd(note) {
    setNotes((prevNotes) => {
      return [...prevNotes, note];
    });
  }

  function handleDelete(id) {
    setNotes((prevNotes) => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateNote add={handleAdd} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            delete={handleDelete}
          />
        );
      })}
      <Footer />
    </div>
  );
};

export default App;
