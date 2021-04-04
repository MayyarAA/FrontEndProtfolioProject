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
import '../ComponentsCSS/FooterCSS.css';
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
function FooterComponent() {
	const classes = useStyles();

	let footerComponentTwo = (
		<div className='footer-container'>
			<section className='footer-subscription'>
				<p className='footer-subscription-heading'>
					Submit your email for any questions
				</p>
				<p className='footer-subscription-text'>
					If you need help with scaling your application or meeting delivery
					specification
				</p>

				<div className='input-areas'>
					<form>
						<input
							className='footer-input'
							name='email'
							type='email'
							placeholder='Your Email'
						/>
						<Button variant='contained' color='white'>
							Send email
						</Button>
					</form>
				</div>
			</section>
			<div class='footer-links'>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Contact Me</h2>
						<a>mayyar1235@outlook.com</a>
					</div>
					<div class='footer-link-items'></div>
				</div>
				<div className='footer-link-wrapper'>
					<div class='footer-link-items'>
						<h2>Projects</h2>
						<a href='https://github.com/MayyarAA/IdentityServer4OAuth2OpenIdConnect'>
							Identity Server{' '}
						</a>
						<a href='https://github.com/MayyarAA/MicroServiceRunner'>
							MVC Project
						</a>
						<a href='https://github.com/MayyarAA/exerciseapp'>MERN Project</a>
					</div>
					{/* <div class='footer-link-items'></div> */}
					<div class='footer-link-items'>
						<h2>Social Media</h2>

						<a href='https://www.facebook.com/mayyar.alatari/'>Facebook</a>
					</div>
					<div class='footer-link-items'></div>
					<div class='footer-link-items'>
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
					</div>
				</div>
			</div>
			<section class='social-media'>
				<div class='social-media-wrap'>
					<div class='footer-logo'>{/* <img src={logo} alt="Logo" />; */}</div>
					<small class='website-rights'>Mayyar Al-Atari Portfolio Site</small>
					<div class='social-icons'>
						<Link
							class='social-icon-link facebook'
							to='/'
							target='_blank'
							aria-label='Facebook'>
							<i class='fab fa-facebook-f' />
						</Link>
						<Link
							class='social-icon-link instagram'
							to='/'
							target='_blank'
							aria-label='Instagram'>
							<i class='fab fa-instagram' />
						</Link>
						<Link
							class='social-icon-link youtube'
							to='/'
							target='_blank'
							aria-label='Youtube'>
							<i class='fab fa-youtube' />
						</Link>
						<Link
							class='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='Twitter'>
							<i class='fab fa-twitter' />
						</Link>
						<Link
							class='social-icon-link twitter'
							to='/'
							target='_blank'
							aria-label='LinkedIn'>
							<i class='fab fa-linkedin' />
						</Link>
					</div>
				</div>
			</section>
		</div>
	);

	let footerComponent = (
		<div>
			<div>
				<nav className='Appbar'>
					<div className='Appbarcontainer'>
						<div className='AppbarH3'>
							<h3>Mayyar Al-Atari</h3>
						</div>
						<ul className='Navmenu'>
							<li>
								<a href='https://github.com/MayyarAA'>
									<GitHubIcon
										style={({ fontSize: 70 }, { color: 'white' })}></GitHubIcon>
								</a>
							</li>
							<li>
								<a href='https://www.linkedin.com/in/mayyar-al-atari-64b76b112'>
									<LinkedInIcon
										style={
											({ fontSize: 70 }, { color: 'white' })
										}></LinkedInIcon>
								</a>
							</li>
						</ul>
						<div></div>
						<div></div>
					</div>
				</nav>
				<div></div>
			</div>
		</div>
	);
	return <div>{footerComponentTwo}</div>;
}

export default FooterComponent;
