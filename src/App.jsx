import { useEffect, useState } from 'react';
import './App.css';
import { Main } from './components/Main';
import { Sidebar } from './components/Sidebar';
import uuid from 'react-uuid';

function App() {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes") || [])
  );
  const [activeNote, setActiveNote] = useState(false);

  useEffect(() => {
    //ローカルストレージにノートを保存する
    localStorage.setItem("notes", JSON.stringify(notes))

  }, [notes]);

  const onAddNote = () => {
    const newNote = {
      id: uuid(),
      title: "new",
      content: "",
      modDate: Date.now(),
    };
    setNotes([...notes, newNote]);
  }

  const onDeleteNote = (id) => {
    const filterNotes = notes.filter((note) => note.id !== id);
    setNotes(filterNotes);

  }

  const getActiveNote = () => {
    return notes.find((note) => note.id === activeNote)
  }

  const onUpdateNote = (updatedNote) => {
    //修正された新しいノートの配列を返す
    const updatedNotesArray = notes.map((note) => {
      if (note.id === updatedNote.id) {
        // console.log(updatedNote)
        return updatedNote;
      } else {
        return note;
      }
    });
    // console.log(updatedNotesArray)
    setNotes(updatedNotesArray);
  }

  return (
    <div className="App">
      <Sidebar
        onAddNote={onAddNote}
        notes={notes}
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
      />
      <Main
        activeNote={getActiveNote()}
        onUpdateNote={onUpdateNote}
      />
    </div>
  )
}

export default App;
