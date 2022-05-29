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
import CodeIcon from '@material-ui/icons/Code';
import { makeStyles } from '@material-ui/core/styles';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Tooltip from '@material-ui/core/Tooltip';
import Typed from 'react-typed';
import mediumpng from '../Pictures/mediumpng.png';
import leetcode from '../Pictures/leetcode.png';
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
				<AppBar className={classes.Appbartheme} position='static'>
					<Toolbar>
						<Tooltip title='Software Engineer'>
							<IconButton
								edge='start'
								className={classes.menuButton}
								color='inherit'
								aria-label='menu'>
								<div className='AppbarH3'>
									<h3>Mayyar Al-Atari</h3>
								</div>
							</IconButton>
						</Tooltip>
						<Typography variant='h6' className={classes.title}></Typography>
						<a href='https://github.com/MayyarAA'>
							<Tooltip title="Mayyar's Github">
								<GitHubIcon
									className={classes.items}
									style={({ fontSize: 90 }, { color: 'white' })}></GitHubIcon>
							</Tooltip>
						</a>
						<a href='https://www.linkedin.com/in/mayyar-al-atari-64b76b112'>
							<Tooltip title="Mayyar's LinkedIn">
								<LinkedInIcon
									className={classes.items}
									style={({ fontSize: 70 }, { color: 'white' })}></LinkedInIcon>
							</Tooltip>
						</a>
						<a href='https://leetcode.com/matari5/'>
							<Tooltip title="Mayyar's leetcode">
								<img src={leetcode} alt='mayyar al-atari svg' width='40' height='39' />
							</Tooltip>
						</a>
						<a href='https://mayyaralatari.medium.com/'>
							<Tooltip title="Mayyar's Medium articles">
								<img src={mediumpng} alt='mayyar al-atari svg' width='36' height='35' />
							</Tooltip>
						</a>
						<a href='https://github.com/MayyarAA/FrontEndProtfolioProject'>
							<div class='link'>
								<Tooltip title='Source code for my site'>
									{/* <CodeIcon style={({ fontSize: 80 }, { color: 'white' })} /> */}
									<CodeIcon style={{ fontSize: 60 }} />
								</Tooltip>
							</div>
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
