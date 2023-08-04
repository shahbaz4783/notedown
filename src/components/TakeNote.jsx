import React, { useState } from 'react';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { Card } from '@mui/material';
import Zoom from '@mui/material/Zoom';


const formStyle = {
  display: 'flex',
  flexDirection: 'column',

  padding: '1em',
}

const inputStyle = {
  resize: 'none',
  all: 'unset',
  backgroundColor: 'black',
  padding: '20px',
  color: 'white',
  borderRadius: '0.6em'
}

export const TakeNote = () => {
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
	};

	return (
		<Card sx={{ maxWidth: 345, backgroundColor: 'black' }}>
			<form style={formStyle}>

			{ isExpanded &&	<input
          style={inputStyle}
					name='title'
					type='text'
					onChange={handleChange}
					value={note.title}
					placeholder='Title'
				/>
        }

				<textarea
          style={inputStyle}
					onClick={expand}
					name='body'
					type='text'
					onChange={handleChange}
					value={note.body}
					placeholder='Take a note...'
          rows={isExpanded ? 4 : 1}
				/>

        <Zoom in={isExpanded}>
				<Fab onClick={submitNote}>
					<AddIcon />
				</Fab>
        </Zoom>
			</form>
		</Card>
	);
};
