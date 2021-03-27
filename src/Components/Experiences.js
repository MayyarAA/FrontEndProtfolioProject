import React, { useEffect } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'left',
		fontFamily: 'Cambria',
	},
	icon: {
		fontSize: 25,
	},
}));

const firstCoop = () => {
	const text = 'hello';
	return text;
};

function ExperiencesTotalText() {
	const classes = useStyles();
	useEffect(() => {
		firstCoop();
	});

	//const firstCoop = firstCoop();
	const holder = (
		<div>
			<Typography className={classes.root} variant='h2' gutterBottom>
				Work Experience
			</Typography>
			{firstCoop}
		</div>
	);

	return holder;
}

export { ExperiencesTotalText };
