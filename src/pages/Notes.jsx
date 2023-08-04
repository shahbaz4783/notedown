import React from 'react'
import { Cards } from '../components/Cards'
import notes from '../notes'
import Container from '@mui/material/Container';
import { TakeNote } from '../components/TakeNote';
import { Header } from '../components/Header';


const createNotes = ({ id, title, body }) => {
    
  return (
      <React.Fragment>
      <Cards 
        key={id}
        title={title}
        body={body}
      />
    </React.Fragment>

      
  )
}

export const Notes = () => {
  return (
    <React.Fragment>
        <Header />
        <Container>
        <TakeNote />
        {notes.map(createNotes)}
        </Container>
    </React.Fragment>
  )
}
