import React from 'react';
import {
	Toolbar,
	AppBar,
	Button,
	Typography,
	Tabs,
	Grid,
	FormHelperText,
} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import '../ComponentsCSS/Toolbar.css';

function ToolbarComponent() {
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
								<div className='AppbarH3'>
									<h3>Mayyar Al-Atari </h3>
								</div>
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

	return toolBar;
}

export { ToolbarComponent };

//export default withStyles(styles)(ToolbarComponent);ß
