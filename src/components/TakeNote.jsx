import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Zoom from '@mui/material/Zoom';
import axios from 'axios';

const formStyle = {
	display: 'flex',
	flexDirection: 'column',
	border: '2px solid white',
	position: 'relative',
	borderRadius: '0.6em',
	width: '65%',
};

const inputStyle = {
	resize: 'none',
	all: 'unset',
	padding: '20px',
	color: 'white',
};

const textAreaStyle = {
	resize: 'none',
	all: 'unset',
	padding: '20px',
	color: 'white',
};

const addBtn = {
	backgroundColor: 'yellow',
	position: 'absolute',
	bottom: '10px',
	right: '10px',
};

export const TakeNote = (props) => {
	const [isExpanded, setExpanded] = useState(false);

	const expand = () => {
		setExpanded(true);
	};

	const [note, setNote] = useState({
		title: '',
		body: '',
	});

	const handleChange = (e) => {
		const { name, value } = e.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	};

	const submitNote = (e) => {
		e.preventDefault();
		 axios
				.post(`${import.meta.env.VITE_SERVER_URI}/notes`, note)
				.then((response) => {
					console.log(response.data); // You can handle the server response here
				})
				.catch((error) => {
					console.error('Error posting note:', error);
				});
		// props.onAdd(note);
		setNote({
			title: '',
			body: '',
		});
		setExpanded(false);
	};

	return (
		<form style={formStyle}>
			{isExpanded && (
				<input
					style={inputStyle}
					name='title'
					type='text'
					onChange={handleChange}
					value={note.title}
					placeholder='Title'
				/>
			)}

			<textarea
				style={textAreaStyle}
				onClick={expand}
				name='body'
				type='text'
				onChange={handleChange}
				value={note.body}
				placeholder='Take a note...'
				rows={isExpanded ? 4 : 1}
			/>

			<Zoom in={isExpanded}>
				<Fab onClick={submitNote} style={addBtn}>
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	);
};
