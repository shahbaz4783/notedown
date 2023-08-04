import React from 'react'
import { Cards } from '../components/Cards'
import notes from '../notes'
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';

const createNotes = (note) => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
      <Cards 
        key={note.id}
        title={note.title}
        body={note.body}
      />
        
      </Container>
    </React.Fragment>

      
  )
}

export const Notes = () => {
  return (
    <main className='notes-container'>
        {notes.map(createNotes)}
    </main>
  )
}
