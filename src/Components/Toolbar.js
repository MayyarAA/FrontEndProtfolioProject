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
import '../ComponentsCSS/Toolbar.css';
import NavBar from './NavBar';
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
}));
function ToolbarComponent() {
	const classes = useStyles();
	const toolBar = (
		<div>
			<AppBar className='Appbar' position='sticky'>
				<Toolbar>
					<Grid
						container
						spacing={2}
						direction='row'
						justify='flex-end'
						alignItems='flex-end'>
						<Router>
							<Grid item alignItems='flex-start'>
								<Box display='flex' flexGrow={1}>
									<div className={classes.title}>
										<h3>Mayyar Al-Atari </h3>
									</div>
								</Box>
							</Grid>
							<Grid item>
								<div>
									<Link to='https://github.com/MayyarAA'>
										<GitHubIcon style={{ fontSize: 40 }}></GitHubIcon>
									</Link>
								</div>
							</Grid>
							<Grid item>
								<a href='https://www.linkedin.com/in/mayyar-al-atari-64b76b112'>
									<LinkedInIcon style={{ fontSize: 40 }}></LinkedInIcon>
								</a>
							</Grid>
						</Router>
					</Grid>
				</Toolbar>
			</AppBar>
		</div>
	);

	return <NavBar />;
	// return toolBar;
}

export { ToolbarComponent };

//export default withStyles(styles)(ToolbarComponent);ß
