import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Card } from '@mui/material';

export const TakeNote = () => {

  const [note, setNote] = useState({
    title: '',
    body: ''
  })

  const handleChange = (e) => {
     const { name, value } = e.target;

     setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
     })
  }

  const submitNote = (e) => {
    e.preventDefault()
  }

  return (
    <Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
        <form>
            <input name='title' type='text' onChange={handleChange} value={note.title} placeholder='Title' /> <br />
            <textarea name='body' type='text' onChange={handleChange} value={note.body} placeholder='Take a note...' /> <br />
            <Fab onClick={submitNote}>
            <AddIcon />
            </Fab>
        </form>
    </Card>
  )
}
