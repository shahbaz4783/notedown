import React from 'react'
import { Cards } from './Cards'
import notes from '../notes'

const createNotes = (note) => {
  return (
      <Cards 
        key={note.id}
        title={note.title}
        body={note.body}
      />
  )
}

export const CardsContainer = () => {
  return (
    <main className='notes-container'>
        {notes.map(createNotes)}
    </main>
  )
}
