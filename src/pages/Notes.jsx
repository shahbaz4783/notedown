import React, { useState } from 'react';
import { Cards } from '../components/Cards';
import Container from '@mui/material/Container';
import { TakeNote } from '../components/TakeNote';
import { Header } from '../components/Header';

export const Notes = () => {
	const [notesArr, setNotesArr] = useState([]);

	const addNote = (newNote) => {
		setNotesArr((prevNotes) => {
			return [...prevNotes, newNote];
		});
	};

	return (
		<React.Fragment>
			<Header />
			<Container
				style={{
					border: '2px solid red',
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<TakeNote onAdd={addNote} />

				{notesArr.map((noteItem) => {
					return <Cards title={noteItem.title} body={noteItem.body} />;
				})}

			</Container>
		</React.Fragment>
	);
};
