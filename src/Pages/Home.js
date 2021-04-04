import React from 'react';
import HeroSectionArea from '../Components/HeroSectionArea';
import AboutComponent from '../Components/AboutComponent';
import FooterComponent from '../Components/FooterComponent';
import ParentExperinceClass from '../Components/ParentExperinceClass';
import { ToolbarComponent } from '../Components/Toolbar';
import SkillsFullPage from './SkillsFullPage';
import '../ComponentsCSS/OverallCSS.css';
import ExperienceFullPage from './ExperienceFullPage';
import { Grid, Typography, Container } from '@material-ui/core';
function Home() {
	return (
		<div>
			<ToolbarComponent />
			{/* <Grid container justify='center'> */}
			<HeroSectionArea />

			<br />
			<Container justify='center'>
				<AboutComponent />
			</Container>

			<br />
			<div>
				<br />

				<Grid container justify='center'>
					<SkillsFullPage />
				</Grid>
				<br />
				<br />
				<ExperienceFullPage />
				<br />
				<br />
				<br />
				<br />
				<FooterComponent />
			</div>
		</div>
	);
}

export default Home;
