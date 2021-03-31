import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../ComponentsCSS/OverallCSS.css';
const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'left',
		fontFamily: 'Cambria',
	},
	icon: {
		fontSize: 40,
	},
}));

function ExperiencesTotalText() {
	const classes = useStyles();

	const holder = (
		<div>
			<Typography variant='h2' color='textPrimary' component='p'>
				Work Experiences
			</Typography>
		</div>
	);

	return holder;
}

export default ExperiencesTotalText;
