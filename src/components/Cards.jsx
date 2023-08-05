import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

export const Cards = ({ title, body }) => {
	return (
		<Container sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
			<Card sx={{ border: '1px solid white', margin: '1em' }}>
				<CardContent>
					<Typography gutterBottom variant='h5' component='div'>
						{title}
					</Typography>
					<Typography variant='body2' color='text.secondary'>
						{body}
					</Typography>
				</CardContent>
			</Card>
		</Container>
	);
};
