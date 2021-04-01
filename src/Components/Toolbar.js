import React from 'react';
import {
	Toolbar,
	AppBar,
	Button,
	Typography,
	Tabs,
	Grid,
	FormHelperText,
	IconButton,
	Box,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Typed from 'react-typed';
import '../ComponentsCSS/Toolbar.css';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(1),
	},
	title: {
		flexGrow: 1,
	},
	items: {
		fontSize: 40,
	},
	Appbartheme: { background: '#212121' },
}));
function ToolbarComponent() {
	const classes = useStyles();
	const toolBar = (
		<div className='item'>
			<div className={classes.root}>
				<AppBar className={classes.Appbartheme}>
					<Toolbar>
						<IconButton
							edge='start'
							className={classes.menuButton}
							color='inherit'
							aria-label='menu'>
							<div className='AppbarH3'>
								<h3>Mayyar Al-Atari</h3>
							</div>
						</IconButton>
						<Typography variant='h6' className={classes.title}></Typography>
						<a href='https://github.com/MayyarAA'>
							<GitHubIcon
								className={classes.items}
								style={({ fontSize: 90 }, { color: 'white' })}></GitHubIcon>
						</a>
						<a href='https://www.linkedin.com/in/mayyar-al-atari-64b76b112'>
							<LinkedInIcon
								className={classes.items}
								style={({ fontSize: 70 }, { color: 'white' })}></LinkedInIcon>
						</a>
					</Toolbar>
				</AppBar>
			</div>
		</div>
	);

	// return <NavBar />;
	return toolBar;
}

export { ToolbarComponent };

//export default withStyles(styles)(ToolbarComponent);ß
