import React from 'react';
import {
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	Typography,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import '../ComponentsCSS/OverallCSS.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		maxWidth: 752,
	},
	demo: {
		backgroundColor: theme.palette.background.paper,
	},
	title: {
		margin: theme.spacing(4, 0, 2),
	},
}));

function ParentExperinceClass(experienceArrayJSON, experienceHeaderValue) {
	const classes = useStyles();

	let listItemArray = [];

	for (let i = 0; i < experienceArrayJSON.length; i++) {
		listItemArray.push(
			<ListItem>
				<ListItemIcon>
					<AddIcon />
				</ListItemIcon>
				<ListItemText>
					<Typography variant='h5' color='textSecondary' component='p'>
						{experienceArrayJSON[i]}
					</Typography>
				</ListItemText>
			</ListItem>
		);
	}
	let listComponent = (
		<div>
			<List>{listItemArray}</List>
		</div>
	);

	let experinceH3Component = (
		<div>
			<Typography variant='h4' color='textSecondary' component='p'>
				{experienceHeaderValue}
			</Typography>
		</div>
	);

	return (
		<div className='ParentBackground'>
			<div>{experinceH3Component}</div>
			<div>{listComponent}</div>
		</div>
	);
}

export default ParentExperinceClass;
