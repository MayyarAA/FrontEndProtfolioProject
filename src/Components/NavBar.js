import React from 'react';
import '../ComponentsCSS/Toolbar.css';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
function NavBar() {
	return (
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
									style={({ fontSize: 70 }, { color: 'white' })}></LinkedInIcon>
							</a>
						</li>
					</ul>
					<div></div>
					<div></div>
				</div>
			</nav>
			<div></div>
		</div>
	);
}

export default NavBar;
